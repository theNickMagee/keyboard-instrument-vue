

import { store } from '../state/store.js'
import { samplerTypes } from "../assets/constants";
import * as Tone from 'tone'
import keyServices from './keyServices.js';


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
            return e.name === k.options.type;
        });
        sampler.sampler.volume.value = k.options.volume;
        sampler.sampler.triggerAttackRelease(k.options.note, k.options.duration, Tone.now(), k.options.velocity);
    },
    scheduleSamplePlay(k) {
        const sampler = samplerTypes.find((e) => {
            return e.name === k.options.type;
        });

        let key = keyServices.findKeyWithLetter(k.key);




        //play a note every quarter-note
        let loop = new Tone.Loop(time => {

            for (let i = 0; i < key.options.padsSet.length; i++) {

                sampler.sampler.triggerAttackRelease(k.options.note, k.options.duration, Math.ceil(time) + key.options.padsSet[i] * sampler.sampler.toSeconds("16n"));
            }

        }, "1n").start();

        key.options.looper = loop;





        Tone.start();
        Tone.Transport.start()


    },
    cancelScheduledLoop(k) {
        let looper = keyServices.findKeyWithLetter(k.key).options.looper;
        looper.stop()
    }

}
