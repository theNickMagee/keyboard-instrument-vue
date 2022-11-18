

import { store } from '../state/store.js'

export default {
    methods: {
        savePreset() {
            if (store.presets.find((p, i) => {
                if (p.name === store.currentPresetName) {
                    store.presets[i].keys = store.keys;
                    return true;
                } else {
                    return false;
                }
            })) {

            } else {
                store.presets.push({
                    name: store.currentPresetName,
                    keys: store.keys
                });
            }
            // https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage-sessionstorage
            localStorage.presets = JSON.stringify(store.presets);
        },
        loadPreset(p) {
            store.keys = JSON.parse(JSON.stringify(p.keys));
            store.currentPresetName = JSON.parse(JSON.stringify(p.name));
        },
    },
}


