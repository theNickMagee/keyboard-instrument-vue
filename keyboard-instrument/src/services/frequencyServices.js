

import { store } from '../state/store.js'
import * as Tone from 'tone'

export default {
    playFrequency(k) {
        console.log("play: ", k.options.hz);
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now()
        synth.triggerAttackRelease(k.options.hz, "8n", now)
    },


}