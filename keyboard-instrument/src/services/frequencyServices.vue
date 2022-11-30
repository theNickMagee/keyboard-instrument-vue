

import { store } from '../state/store.js'
import * as Tone from 'tone';



export default {
    playFrequency(k) {
        console.log("play: ", k.options.hz);
        const now = Tone.now()
        const synth = k.components.synth;
        synth.triggerAttackRelease(k.options.hz, k.options.release, now)
    },
    // stopFrequency(k){
    //      const now = Tone.now()
    //     synth.triggerAttack(k.options.hz, now)
    // },
    updateSynth(k) {
        if (!k.components) {
            console.log("create synth")
            k.components = { synth: new Tone.Synth().toDestination() };

        }

        const synth = k.components.synth;
        // synth
        // synth.oscillator.volume = options.volume;
        // osc
        synth.oscillator.baseType = k.options.type;
        // env
        synth.envelope.attack = k.options.attack;
        synth.envelope.decay = k.options.decay;
        synth.envelope.sustain = k.options.sustain;
        synth.envelope.release = k.options.release;

    }




}