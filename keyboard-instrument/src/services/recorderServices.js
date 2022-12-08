
import { store } from '../state/store.js'


// Import module.
// import AudioRecorder from 'node-audiorecorder'

// // Options is an optional parameter for the constructor call.
// // If an option is not given the default value, as seen below, will be used.
// const options = {
//     program: `rec`, // Which program to use, either `arecord`, `rec`, or `sox`.
//     device: null, // Recording device to use, e.g. `hw:1,0`

//     bits: 16, // Sample size. (only for `rec` and `sox`)
//     channels: 1, // Channel count.
//     encoding: `signed-integer`, // Encoding type. (only for `rec` and `sox`)
//     format: `S16_LE`, // Encoding type. (only for `arecord`)
//     rate: 16000, // Sample rate.
//     type: `wav`, // Format type.

//     // Following options only available when using `rec` or `sox`.
//     silence: 2, // Duration of silence in seconds before it stops recording.
//     thresholdStart: 0.5, // Silence threshold to start recording.
//     thresholdStop: 0.5, // Silence threshold to stop recording.
//     keepSilence: true, // Keep the silence in the recording.
// }


// let audioRecorder = new AudioRecorder(options, logger)



export default {

    startRecording() {


        store.recording = true;
        audioRecorder.start();
    },

    stopRecording() {
        store.recording = false;
        audioRecorder.stop();

    },


}





// // navigator.mediaDevices.getUserMedia({audio: true})
// //   .then(stream => recorder.init(stream))
// //   .catch(err => console.log('Uh oh... unable to get stream...', err));

// function startRecording() {

// }

// function stopRecording() {

// }

// function download() {
// }