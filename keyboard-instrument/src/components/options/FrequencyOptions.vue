<script>
import { store } from '../../state/store.js'

export default {
    data() {
        return {
            store,
        }
    },

    props: ['parent'],
    methods: {
        onFreqChange(c) {
            //update the store 'keys' item
            this.store.keys.find((k, i) => {
                if (k.key === parent.key) {
                    this.store.keys[i].options.hz = c;
                }
            })
        }
    }
}
</script>

<template>

    <div>
        <input v-model="this.parent.options.hz" @input="e => onFreqChange(e.target.value)" />
    </div>
</template>