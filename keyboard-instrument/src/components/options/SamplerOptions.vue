<script>
import { store } from '../../state/store.js'
import { samplerTypes } from '../../assets/constants';
import { keyOptions } from '../../assets/constants';

export default {
    data() {
        return {
            store,
            samplerTypes,
            keyOptions
        }
    },

    props: ['parent'],
    methods: {
        onNoteChange(n) {
            this.store.keys.find((k, i) => {
                if (k.key === parent.key) {
                    this.store.keys[i].options.note = n;
                }
            })
        }
    }
}
</script>

<template>

    <div>
        <!-- <input v-model="this.parent.options.hz" @input="e => onFreqChange(e.target.value)" /> -->
        <!-- sampler type -->
        <select class="base-sel dd-bg option-dd" v-model="this.parent.options.type">
            <option disabled value="">Please Select</option>
            <option v-for="option in this.samplerTypes" :value="option.name">{{ option.name }}</option>
        </select>
        <!-- the note (input) -->
        <input v-model="this.parent.options.note" @input="e => onNoteChange(e.target.value)" />
        <!-- volume (slider) -->
        <!-- velocity (slider) -->
        <!-- pressure (slider) -->
        <!-- reverb (slider) -->
        <!-- bend (slider) -->

        <!-- repeate every nth/16 note (element) -->
    </div>
</template>


<style scoped>
.option-dd {
    margin-top: 5px;
}
</style>