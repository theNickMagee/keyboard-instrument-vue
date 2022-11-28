

import { store } from '../state/store.js'
import frequencyServices from './frequencyServices.js';
import samplerServices from './samplerServices.js';

export default {
    handleKeyDown(letter) {
        store.keys.find((k, i) => {
            if (k.key === letter) {
                if (k.type === 'Frequency' && !k.playing) {
                    k.playing = true;
                    frequencyServices.playFrequency(k);
                }
                if (k.type === 'Sampler' && !k.playing) {
                    k.playing = true;
                    samplerServices.playSample(k);
                }
            }
        })
    },

    handleKeyRelease(letter) {
        let k = this.findKeyWithLetter(letter);
        if (k) {
            if ((k.type === 'Frequency' || k.type === 'Sampler') && k.playing) {
                k.playing = false;
            }
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
