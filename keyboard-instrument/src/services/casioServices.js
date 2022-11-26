import * as Tone from 'tone'
const sampler = new Tone.Sampler({
    urls: {
        A1: "A1.mp3",
        A2: "A2.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/casio/",

}).toDestination();

const synth = new Tone.MembraneSynth().toDestination();

const lowPass = new Tone.Filter({
    frequency: 8000,
}).toMaster();

const snareDrum = new Tone.NoiseSynth({
    volume: 1,
    noise: {
        type: 'white',
        playbackRate: 3,
    },
    envelope: {
        attack: 0.001,
        decay: 0.20,
        sustain: 0.15,
        release: 0.03,
    },
}).connect(lowPass).toDestination();


export default {


    callCasioKey(key) {
        // let string = key + 1;
        // console.log(string);
        // sampler.triggerAttackRelease([string], 0.5);

        // synth.triggerAttack("C4", "+0.5", 0.5);

        snareDrum.triggerAttackRelease("8n", 0.05);
    },




}