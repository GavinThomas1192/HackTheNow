import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import openSocket from 'socket.io-client';

import AudioRecorder from 'react-audio-recorder';


import RecordRTC from 'recordrtc'
import Recorder from 'react-recorder'

import { ReactMic } from 'react-mic';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const context = new AudioContext();
let microphone;
let analyser;
let javascriptNode;

const socket = openSocket('http://localhost:8000');

class VoiceTranslator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            AzureCognitiveAccessToken: '',
            timestamp: 'Nothing yet',
            accessToken: '',
            translation: '',
            record: false,
            recordedBlobURL: '',
            command: 'stop', 
            returnedAudioRecordingBinaryFile: [],
            toggleVolumeReader: false,
            toggleVoiceListening: false,
            average: ''

        }
    }



    componentDidMount() {
        socket.on('timer', timestamp => this.setState({ timestamp }));
        socket.on('azureAuth', accessToken => this.setState({ accessToken }));
        socket.on('translationReturned', translation => this.setState({ translation }));
        socket.on('returnedAudioTranslaton', returnedAudioRecordingBinaryFile => this.handleIncomingBuffers(returnedAudioRecordingBinaryFile));
    }

  
    handleIncomingBuffers = (returnedAudioRecordingBinaryFile) => {
        console.log(returnedAudioRecordingBinaryFile)
        let playbackFile = []

        playbackFile.push(returnedAudioRecordingBinaryFile)

        this.setState({returnedAudioRecordingBinaryFile: playbackFile})

    }
    handleGetTranslation = () => {
        socket.emit('translate', `${__AZURE_CLIENT_SECRET__}`)
    }

    componentDidUpdate() {
        // console.log('UPDATED', this.state)

        {!this.state.returnedAudioRecordingBinaryFile ? undefined :

        this.state.returnedAudioRecordingBinaryFile.map(ele => { 

            context.decodeAudioData(ele, (buffer) => {
            const source = context.createBufferSource();
            source.buffer = buffer;
            source.connect(context.destination);
            source.start(0);
            
          });
        })
        }

        
        
    }

    analyzeVolume = () => {
     
                navigator.getUserMedia({
                audio: true
                },
                (stream) =>{
                    // stream.getAudioTracks().forEach(function(track){track.stop();})
                analyser = context.createAnalyser();
                microphone = context.createMediaStreamSource(stream);
                javascriptNode = context.createScriptProcessor(2048, 1, 1);

                analyser.smoothingTimeConstant = 0.8;
                analyser.fftSize = 1024;

                microphone.connect(analyser);
                analyser.connect(javascriptNode);
                javascriptNode.connect(context.destination);

                javascriptNode.onaudioprocess = () => {
                    var array = new Uint8Array(analyser.frequencyBinCount);
                    analyser.getByteFrequencyData(array);
                    var values = 0;

                    var length = array.length;
                    for (var i = 0; i < length; i++) {
                        values += (array[i]);
                    }

                    var average = values / length;
                    this.setState({average})

                    if (M)
                    {Math.round(average) > 30 ? this.setState({toggleVoiceListening: true}) : this.setState({toggleVoiceListening: false})}

                    //  console.log(Math.round(average));
                }

        
                },
                function(err) {
                console.log("The following error occured: " + err.name)
                })
            
    }

  

    
    onChange = (AudioRecorderChangeEvent) => {
        
        {microphone ? microphone.disconnect(analyser) : undefined}
        {javascriptNode ? javascriptNode.onaudioprocess = null : undefined}
        
        socket.emit('wordsToBeTranslated', AudioRecorderChangeEvent.audioData)
        console.log(AudioRecorderChangeEvent.audioData)
    }





    render() {
        return (
            <div className="application">
                <BrowserRouter
                    forceRefresh={false}>
                    <div>
                     
                        <p>_____</p>
                        <Button raised color="primary" onClick={this.handleGetTranslation}>
                            Start TRANSLATION!
                        </Button>
                        <h1>{this.state.recordedBlobURL !== '' ? `${this.state.recordedBlobURL}` : `Nothing Recorded yet`} </h1>
                        <h3>{this.state.translation}</h3>
                        <h1>{this.state.average}</h1>
                        <h1>{this.state.toggleVoiceListening ? 'true' : 'false'}</h1>
                    
                        {/* stopRecording={this.state.toggleVoiceListening} startRecording={this.state.toggleVoiceListening} */}
                        <AudioRecorder startRecording={this.state.toggleVoiceListening} onRecordStart={this.analyzeVolume} onChange={(AudioRecorderChangeEvent) => this.onChange(AudioRecorderChangeEvent)} />

                     
                        <Button raised color="primary" onClick={this.handlePlaybackTransaltion}>
                            Play Translation
                        </Button> 

                        <p>_____</p>


                        <Button raised color="primary" onClick={this.analyzeVolume}>
                            START!
                        </Button> 

                        {/* <Button raised color="primary" onClick={this.setState({toggleVoiceListening: false})}>
                            STOP!
                        </Button>  */}

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default VoiceTranslator
