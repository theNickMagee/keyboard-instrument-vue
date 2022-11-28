

import { store } from '../state/store.js'
import { samplerTypes } from "../assets/constants";
import * as Tone from 'tone'


export default {

    // editSampler(name, key, value) {
    //     const sampler = samplerTypes.find((e) => {
    //         console.log(e.name === name)
    //         return e[key] === k.options.type;
    //     });
    //     sampler.sampler.volume.value = k.options.volume;
    // },

    playSample(k) {
        // console.log("playing sample: ", k)
        // loop through the samplers and get the right sampler
        // 
        const sampler = samplerTypes.find((e) => {
            console.log(e.name === k.options.type)
            return e.name === k.options.type;
        });
        console.log("found: ", sampler)
        sampler.sampler.volume.value = k.options.volume;
        sampler.sampler.triggerAttackRelease(k.options.note, k.options.duration, Tone.now(), k.options.velocity);
    },

}
