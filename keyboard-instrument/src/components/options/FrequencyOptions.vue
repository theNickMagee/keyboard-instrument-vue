<script>
import { store } from '../../state/store.js'
import { frequencyTypes } from '../../assets/constants'
import frequencyServices from '../../services/frequencyServices'

export default {
    data() {
        return {
            store,
            frequencyTypes
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
        },
        onChange() {
            frequencyServices.updateSynth(this.parent.options);
        }
    }
}
</script>

<template>

    <div>
        <!-- type -->
        <select v-on:change="onChange()" class="base-sel dd-bg option-dd" v-model="this.parent.options.type">
            <option disabled value="">Please Select</option>
            <option v-for="option in this.frequencyTypes" :value="option.base">{{ option.base }}</option>
        </select>
        <!-- note -->
        <div>
            <input v-on:change="onChange()" v-model="this.parent.options.hz"
                @input="e => onFreqChange(e.target.value)" />
        </div>
        <!-- volume -->
        <!-- <div>
            Volume
            <input v-on:change="onChange()" type="range" min="-20" max="20" step="1"
                v-model="this.parent.options.volume" />
        </div> -->
        <!-- attack -->
        <div>
            Attack
            <input v-on:change="onChange()" type="range" min="0.01" max="15" step="0.01"
                v-model="this.parent.options.attack" />
        </div>
        <!-- sustain -->
        <div>
            Sustain
            <input v-on:change="onChange()" type="range" min="0.01" max="1" step="0.01"
                v-model="this.parent.options.sustain" />
        </div>
        <!-- decay -->
        <div>
            Decay
            <input v-on:change="onChange()" type="range" min="0.01" max="5" step="0.01"
                v-model="this.parent.options.decay" />
        </div>
        <!-- release -->
        <div>
            Release
            <input v-on:change="onChange()" type="range" min="0.01" max="5" step="0.01"
                v-model="this.parent.options.release" />
        </div>
    </div>
</template>

<style scoped>

</style>


<!-- https://en.wikipedia.org/wiki/Synthesizer#ADSR_envelope 
    Attack is the time taken for initial run-up of level from nil to peak, beginning when the note is triggered.
Decay is the time taken for the subsequent run down from the attack level to the designated sustain level.
Sustain is the level during the main sequence of the sound's duration, until the key is released.
Release is the time taken for the level to decay from the sustain level to zero after the key is released. -->