<script>
import { store } from '../../state/store.js'
import { samplerTypes } from '../../assets/constants';
import { keyOptions } from '../../assets/constants';
import samplerServices from '../../services/samplerServices';
import LooperOption from '../looper/LooperOption.vue';


export default {
    data() {
        return {
            store,
            samplerTypes,
            keyOptions
        };
    },
    props: ["parent"],
    methods: {
        onNoteChange(n) {
            this.store.keys.find((k, i) => {
                if (k.key === parent.key) {
                    this.store.keys[i].options.note = n;
                }
            });
        },
        // onSamplerValueChanged(key, newVal) {
        //     samplerServices.editSampler(this.parent.options.type, key, newVal);
        // }
    },
    components: { LooperOption }
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
        <div>volume</div>
        <input type="range" min="-20" max="20" step="1" v-model="this.parent.options.volume" />

        <!-- length of note in seconds (slider) -->
        <div>duration</div>
        <input type="range" min="0" max="5" step="0.1" v-model="this.parent.options.duration" />

        <!-- <CustomSlider :min="0" :max="20" :step="1" :model="this.parent.options.volume" /> -->
        <!-- velocity (slider) -->
        <div>velocity</div>
        <input type="range" min="0.01" max="5" step="0.01" v-model="this.parent.options.velocity" />
        <!-- pressure (slider) -->
        <!-- reverb (slider) -->
        <!-- bend (slider) -->

        <!-- repeate every nth/16 note (element) -->
        <LooperOption :parent='this.parent' />
    </div>
</template>


<style scoped>
.option-dd {
    margin-top: 5px;
}
</style>