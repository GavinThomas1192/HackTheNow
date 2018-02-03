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
            returnedAudioRecordingBinaryFile: 'Nothing yet.',

        }
    }



    componentDidMount() {
        socket.on('timer', timestamp => this.setState({ timestamp }));
        socket.on('azureAuth', accessToken => this.setState({ accessToken }));
        socket.on('translationReturned', translation => this.setState({ translation }));
        socket.on('returnedAudioTranslaton', returnedAudioRecordingBinaryFile => this.setState({returnedAudioRecordingBinaryFile}));
    }

  

    handleGetTranslation = () => {
        socket.emit('translate', `${__AZURE_CLIENT_SECRET__}`)
    }

    componentDidUpdate() {
        console.log('UPDATED', this.state)


        
        
    }

    handlePlaybackTransaltion = () => {
        context.decodeAudioData(this.state.returnedAudioRecordingBinaryFile, (buffer) => {
            const source = context.createBufferSource();
            source.buffer = buffer;
            source.connect(context.destination);
            // source.loop = loop;
            source.start(0);
            // source.onended = onended;
            // this.playbackNode = source;
            // resolve(source);
          });

    }

    // play = (audioBuffer) => {
    //     var source = context.createBufferSource();
    //     source.buffer = audioBuffer;
    //     source.connect( context.destination );
    //     source.start(0);

    // }
    
    
    
    
    
    
    onChange = (AudioRecorderChangeEvent) => {
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
                        {/* <h3>{this.state.returnedAudioRecordingBinaryFile}</h3> */}

                        {/* <Recorder command={this.state.command} onStop={this.onStop} /> */}


                        <AudioRecorder onChange={(AudioRecorderChangeEvent) => this.onChange(AudioRecorderChangeEvent)} />

                        {/* <ReactMic
                            record={this.state.record}
                            className="sound-wave"
                            onStop={this.onStop}
                            strokeColor="#000000"
                            backgroundColor="#FF4081" /> */}
                        < p > _____</p>
                        {/* {/* <Button raised color="primary" onClick={this.startRecording}>
                            Start Recording
                        </Button> */}
                        <Button raised color="primary" onClick={this.handlePlaybackTransaltion}>
                            Play Translation
                        </Button> 

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}




export default VoiceTranslator
