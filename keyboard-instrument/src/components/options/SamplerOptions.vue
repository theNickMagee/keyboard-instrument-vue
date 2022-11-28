<script>
import { store } from '../../state/store.js'
import { samplerTypes } from '../../assets/constants';

export default {
    data() {
        return {
            store,
            samplerTypes
        }
    },

    props: ['parent'],
    methods: {
        onDropDownChoose(c) {
            //update the store 'keys' item
            // this.store.keys.find((k, i) => {
            //     if (k.key === parent.key) {
            //         this.store.keys[i].options.hz = c;
            //     }
            // })
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
            <option v-for="option in this.samplerTypes" :value="option">{{ option }}</option>
        </select>
        <!-- the note (input) -->

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