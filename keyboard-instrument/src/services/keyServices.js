

import { store } from '../state/store.js'
import casioServices from './casioServices.js';

export default {
    handleKeyDown(letter) {
        store.keys.find((k, i) => {
            if (k.key === letter) {
                if (k.type === 'casio' && !k.playing) {
                    casioServices.callCasioKey(letter);
                }
            }
        })
    },

    handleKeyRelease(letter) {
        // let k = this.findKeyWithLetter(letter);
        // if (k.type === 'casio' && k.playing) {
        //     k.playing = false;
        // }
    },

    findKeyWithLetter(l) {
        store.keys.find((k, i) => {
            if (k.key === letter) {
                return k;
            }
        });
    }


}
