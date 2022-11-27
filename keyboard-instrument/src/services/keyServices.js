

import { store } from '../state/store.js'
import casioServices from './casioServices.js';
import frequencyServices from './frequencyServices.js';

export default {
    handleKeyDown(letter) {
        store.keys.find((k, i) => {
            if (k.key === letter) {
                if (k.type === 'casio' && !k.playing) {
                    casioServices.callCasioKey(letter);
                }
                if (k.type === 'Frequency' && !k.playing) {
                    k.playing = true;
                    frequencyServices.playFrequency(k);
                }
            }
        })
    },

    handleKeyRelease(letter) {
        let k = this.findKeyWithLetter(letter);
        if (k.type === 'Frequency' && k.playing) {
            k.playing = false;
        }
    },

    findKeyWithLetter(l) {
        return store.keys.find((k, i) => {
            return (k.key === l)
        });
    },
    editKey(keyLetter, newItem) {
        store.keys.find((k, i) => {
            if (k.key === keyLetter) {
                k = newItem;
            }
        });

    }


}
