

import { store } from '../state/store.js'

export default {
    methods: {
        savePreset() {
            store.presets.push({
                name: store.currentPresetName,
                keys: store.keys
            });
            // https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage-sessionstorage
            localStorage.presets = JSON.stringify(store.presets);
        },
        loadPreset(p) {
            store.keys = p.keys;
            store.currentPresetName = p.name;
        },
    },
}


