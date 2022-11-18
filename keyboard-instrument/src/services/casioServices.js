import * as Tone from 'tone'
const sampler = new Tone.Sampler({
    urls: {
        A1: "A1.mp3",
        A2: "A2.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/casio/",

}).toDestination();

export default {


    callCasioKey(key) {
        let string = key + 1;
        console.log(string);
        sampler.triggerAttackRelease([string], 0.5);
    }
}