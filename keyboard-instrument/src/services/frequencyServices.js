

import { store } from '../state/store.js'
import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();



export default {
    playFrequency(k) {

        console.log("play: ", k.options.hz);
        const now = Tone.now()
        synth.triggerAttackRelease(k.options.hz, "4n", now)
    },
    // stopFrequency(k){
    //      const now = Tone.now()
    //     synth.triggerAttack(k.options.hz, now)
    // },
    updateSynth(options) {
        synth.volume.value = options.volume;

        // synth
        // osc
        // synth.oscillator.baseType = options.type;
        // // env
        // synth.envelope.attack = options.attack;
        // synth.envelope.decay = options.decay;
        // synth.envelope.sustain = options.sustain;
        // synth.envelope.release = options.release;

    }




}