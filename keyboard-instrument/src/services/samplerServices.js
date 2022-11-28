

import { store } from '../state/store.js'
import { samplerTypes } from "../assets/constants";


export default {

    playSample(k) {
        // console.log("playing sample: ", k)
        // loop through the samplers and get the right sampler
        // 
        const sampler = samplerTypes.find((e) => {
            console.log(e.name === k.options.type)
            return e.name === k.options.type;
        });
        console.log("found: ", sampler)
        sampler.sampler.triggerAttackRelease(k.options.note, 0.5);
    },

}
