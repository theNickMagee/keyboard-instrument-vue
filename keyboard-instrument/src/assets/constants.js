const keyOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "N0", "N1", "N2", "N3", "N4", "N5", "N6", "N7", "N8", "N9"];

const types = [
    { name: "Sampler" }, { name: "Frequency" }
]

const frequencyTypes = [{ base: "sine" }, { base: "square" }, { base: "sawtooth" }, { base: "triangle" }, { base: "custom" }]

// const samplerTypes = ["Casio", "Bongo Kick", "Bongo Snare"];
import * as Tone from 'tone'

const samplerTypes = [{
    name: "Casio", sampler: new Tone.Sampler({
        urls: {
            A1: "A1.mp3",
            A2: "A2.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/casio/",

    }).toDestination()
}, {
    name: "Bongo Kick", sampler: new Tone.Sampler({
        urls: {
            C1: "kick.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/drum-samples/Bongos/",

    }).toDestination()
}, {
    name: "Bongo Snare", sampler: new Tone.Sampler({
        urls: {
            C1: "snare.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/drum-samples/Bongos/",

    }).toDestination()
}, {
    name: "Salamander", sampler: new Tone.Sampler({
        urls: {
            C1: "C1.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/salamander/",

    }).toDestination()
}, {
    name: "Kalimba", sampler: new Tone.Sampler({
        urls: {
            C1: "Kalimba_1.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/berklee/",

    }).toDestination()
}, {
    name: "CR Hihat", sampler: new Tone.Sampler({
        urls: {
            C1: "hihat.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/drum-samples/CR78/",

    }).toDestination()
}, {
    name: "Me", sampler: new Tone.Sampler({
        urls: {
            C1: "me.mp3",
        },
        baseUrl: "https://audio-assets-ncm-free.s3.amazonaws.com/",

    }).toDestination()
}];

export { keyOptions, types, samplerTypes, frequencyTypes }