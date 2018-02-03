const request = require('request');
const io = require('socket.io')();



var wsClient = require('websocket').client;
var fs = require('fs');
var streamBuffers = require('stream-buffers');

var file = 'test.wav';





var speechTranslateUrl = 'wss://dev.microsofttranslator.com/speech/translate?api-version=1.0&from=en&to=fr&features=texttospeech';

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });


    client.on('wordsToBeTranslated', blob => {
        file = blob

        fs.writeFileSync('test.wav', blob);
        // file = blob
    })

    client.on('translate', (key) => {
        console.log('this is file before translation', file)
        request.post(
            {
                url: 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken',
                headers: {
                    'Ocp-Apim-Subscription-Key': key
                },
                method: 'POST'
            },
            // once we get the access token, we hook up the necessary websocket events for sending audio and processing the response
            function (error, response, body) {
                if (!error && response.statusCode == 200) {

                    // get the acces token
                    var accessToken = body;
                    client.emit('azureAuth', accessToken)

                    // connect to the speech translate api
                    var ws = new wsClient();

                    // event for connection failure
                    ws.on('connectFailed', function (error) {
                        console.log('Initial connection failed: ' + error.toString());
                    });

                    // event for connection succeed
                    ws.on('connect', function (connection) {
                        console.log('Websocket client connected');

                        // process message that is returned
                        connection.on('message', processMessage);

                        connection.on('close', function (reasonCode, description) {
                            console.log('Connection closed: ' + reasonCode);
                        });

                        // print out the error
                        connection.on('error', function (error) {
                            console.log('Connection error: ' + error.toString());
                        });

                        // send the file to the websocket endpoint
                        sendData(connection, file);
                    });

                    // connect to the service
                    ws.connect(speechTranslateUrl, null, null, { 'Authorization': 'Bearer ' + accessToken });

                }
            }
        );
        function processMessage(message) {
            if (message.type == 'utf8') {
                var result = JSON.parse(message.utf8Data)
                console.log('type:%s recognition:%s translation:%s', result.type, result.recognition, result.translation);
                client.emit('translationReturned', result.translation)
            }
            else {
                // text to speech binary audio data if features=texttospeech is passed in the url
                // the format will be PCM 16bit 16kHz mono
                console.log('LOOOK HERE', message);
                fs.writeFileSync('response.wav', message.binaryData);

            }
        }

        // load the file and send the data to the websocket connection in chunks
        function sendData(connection, filename) {

            // the streambuffer will raise the 'data' event based on the frequency and chunksize
            var myReadableStreamBuffer = new streamBuffers.ReadableStreamBuffer({
                frequency: 100,   // in milliseconds. 
                chunkSize: 32000  // 32 bytes per millisecond for PCM 16 bit, 16 khz, mono.  So we are sending 1 second worth of audio every 100ms
            });

            // read the file and put it to the buffer
            myReadableStreamBuffer.put(filename);
            // myReadableStreamBuffer.put(fs.readFileSync(filename));

            // silence bytes.  If the audio file is too short after the user finished speeaking,
            // we need to add some silences at the end to tell the service that it is the end of the sentences
            // 32 bytes / ms, so 3200000 = 100 seconds of silences
            myReadableStreamBuffer.put(new Buffer(3200000));

            // no more data to send
            myReadableStreamBuffer.stop();

            // send data to underlying connection
            myReadableStreamBuffer.on('data', function (data) {

                connection.sendBytes(data);
            });

            myReadableStreamBuffer.on('end', function () {
                console.log('All data sent, closing connection');
                connection.close(1000);
            });
        }


    });


});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);