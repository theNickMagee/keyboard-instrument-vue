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
        },
        createScale(r) {

            const keyRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
            const noteRow1 = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E"];

            const keyRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
            const noteRow2 = ["C", "D", "E", "F", "G", "A", "B", "C", "D"];

            const keyRow3 = ["Z", "X", "C", "V", "B", "N", "M"];
            const noteRow3 = ["C", "D", "E", "F", "G", "A", "B"];

            let scaleNumber = this.parent.options.hz.substring(1, this.parent.options.hz.length);
            console.log("scaleNumber: ", scaleNumber)
            let upperScale = parseInt(scaleNumber) + 1;
            let sn;

            switch (r) {


                case 1:

                    for (let i = 0; i < keyRow1.length; i++) {
                        if (i > 6) {
                            sn = upperScale;
                        } else {
                            sn = scaleNumber;
                        }
                        this.store.keys.push({
                            ...this.parent,
                            key: keyRow1[i],
                            type: "Frequency",
                            options: {
                                ...this.parent.options,
                                hz: noteRow1[i] + sn,
                            }
                        })
                    }
                    break;
                case 2:
                    for (let i = 0; i < keyRow2.length; i++) {
                        if (i > 6) {
                            sn = upperScale;
                        } else {
                            sn = scaleNumber;
                        }
                        this.store.keys.push({
                            ...this.parent,
                            key: keyRow2[i],
                            type: "Frequency",
                            options: {
                                ...this.parent.options,
                                hz: noteRow2[i] + sn,
                            }
                        })
                    }
                    break;
                case 3:
                    for (let i = 0; i < keyRow3.length; i++) {
                        if (i > 6) {
                            sn = upperScale;
                        } else {
                            sn = scaleNumber;
                        }
                        this.store.keys.push({
                            ...this.parent,
                            key: keyRow3[i],
                            type: "Frequency",
                            options: {
                                ...this.parent.options,
                                hz: noteRow3[i] + sn,
                            }
                        })
                    }
                    break;
            }
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
        <div class="note-section">
            <div class="main-button create-scale" v-on:click="createScale(1)">QWE</div>
            <div class="main-button create-scale" v-on:click="createScale(2)">ASD</div>
            <div class="main-button create-scale" v-on:click="createScale(3)">ZXC</div>
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
.create-scale {
    width: 20%;
    height: 25px;
    display: flex;
    padding: 0;
    justify-content: center;
}

.note-section {
    display: flex;
    padding: 5px;
    justify-content: space-around;
}
</style>


<!-- https://en.wikipedia.org/wiki/Synthesizer#ADSR_envelope 
    Attack is the time taken for initial run-up of level from nil to peak, beginning when the note is triggered.
Decay is the time taken for the subsequent run down from the attack level to the designated sustain level.
Sustain is the level during the main sequence of the sound's duration, until the key is released.
Release is the time taken for the level to decay from the sustain level to zero after the key is released. -->