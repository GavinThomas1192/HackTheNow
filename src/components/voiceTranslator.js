import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import openSocket from 'socket.io-client';
import SimpleSelect from './selectMenu'
import AudioRecorder from 'react-audio-recorder';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';


import RecordRTC from 'recordrtc'
import Recorder from 'react-recorder'

import { ReactMic } from 'react-mic';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

const context = new AudioContext();
let microphone;
let analyser;
let javascriptNode;
let pauseArray =[];

const socket = openSocket('http://localhost:8000');

const styles = {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

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
            average: '',
            pauseArray: '',
            recordingSent: false,
            langTo: '',
            langFrom: '',
        }
    }



    componentDidMount() {
        socket.on('timer', timestamp => this.setState({ timestamp }));
        socket.on('azureAuth', accessToken => this.setState({ accessToken }));
        socket.on('translationReturned', translation => this.setState({ translation: [...this.state.translation, translation] }));
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
                    // this.setState({average})

                    // this.setState({pauseArray: pauseArray.length})
                    if (Math.round(average) < 50){

                        pauseArray.push(average)
                        if (pauseArray.length === 20) {
                            this.setState({toggleVoiceListening: false})
                        } 
                    } else {
                        pauseArray = []
                        {!this.state.toggleVoiceListening ? this.setState({toggleVoiceListening: true, recordingSent: false}) : undefined}
                    }
                    // {Math.round(average) > 30 ? this.setState({toggleVoiceListening: true}) : this.setState({toggleVoiceListening: false})}

                    //  console.log(Math.round(average));
                }

        
                },
                function(err) {
                console.log("The following error occured: " + err.name)
                })
            
    }

  

    
    onChange = (AudioRecorderChangeEvent) => {
        console.log('hitttttt',)
        // {microphone && analyser ? microphone.disconnect() : undefined}
        // {javascriptNode && analyser ? javascriptNode.onaudioprocess = null : undefined}

        {!this.state.recordingSent ? 
        socket.emit('wordsToBeTranslated', AudioRecorderChangeEvent.audioData)
        : undefined}
        this.setState({recordingSent: !this.state.recordingSent ? true : false})
        console.log(AudioRecorderChangeEvent.audioData)
    }

    selectLanguage = ( to, from ) => {
        console.log(to, from)
        this.setState({langTo: to, langFrom: from})
    }

    sendLanguageChoseToServer = () => {
        console.log(this.state)
        socket.emit('langaugeChoseFrom', this.state.langFrom)
        socket.emit('langageChoseTo', this.state.langTo)
    }





    render() {
        return (
            <div className="application">
                <BrowserRouter
                    forceRefresh={false}>
                    <div>
                    <div style={{padding: '10px'}} className={styles.root}>
                    <AppBar style={{backgroundColor: '#ffffffb3'}} position="static">
                        <Toolbar>
                        <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                        </IconButton>
                        <Typography type="title" color="inherit" style={{margin: 'auto', color: 'black'}}>
                            TranslateMe
                        </Typography>
                        
                        </Toolbar>
                    </AppBar>
                    <SimpleSelect selectLanguage={this.selectLanguage}/>
                    <Button raised color="primary" onClick={this.sendLanguageChoseToServer}>
                            Set Languages!
                        </Button>
                    </div>
                     
                        <p>_____</p>
                        <Button raised color="primary" onClick={this.handleGetTranslation}>
                            Start TRANSLATION!
                        </Button>
                        <h1>{this.state.recordedBlobURL !== '' ? `${this.state.recordedBlobURL}` : `Nothing Recorded yet`} </h1>
                        <h3>{this.state.translation}</h3>
                        {/* <h1>{this.state.average}</h1>
                        <h1>{this.state.pauseArray}</h1> */}
                        <h1>{this.state.toggleVoiceListening ? 'true' : 'false'}</h1>
                    
                        {/* stopRecording={this.state.toggleVoiceListening} startRecording={this.state.toggleVoiceListening} */}
                        <AudioRecorder startRecording={this.state.toggleVoiceListening} onRecordStart={this.analyzeVolume} onChange={(AudioRecorderChangeEvent) => this.onChange(AudioRecorderChangeEvent)} />

                        <ReactMic
                        record={this.state.toggleVoiceListening}
                        className="sound-wave"
                        // onStop={this.onStop}
                        strokeColor="#000000"
                        backgroundColor="#FF4081" />

{/*                      
                        <Button raised color="primary" onClick={this.handlePlaybackTransaltion}>
                            Play Translation
                        </Button> 

                        <p>_____</p>


                        <Button raised color="primary" onClick={this.analyzeVolume}>
                            START!
                        </Button>   */}

                         {/* <Button raised color="primary" onClick={this.setState({toggleVoiceListening: false})}>
                            STOP!
                        </Button>   */}

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default VoiceTranslator
