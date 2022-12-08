<script>
import { store } from '../../state/store.js'
import { samplerTypes } from '../../assets/constants';
import { keyOptions } from '../../assets/constants';
import samplerServices from '../../services/samplerServices';


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
        createScale(r) {

            const keyRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
            const noteRow1 = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E"];

            const keyRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
            const noteRow2 = ["C", "D", "E", "F", "G", "A", "B", "C", "D"];

            const keyRow3 = ["Z", "X", "C", "V", "B", "N", "M"];
            const noteRow3 = ["C", "D", "E", "F", "G", "A", "B"];

            let scaleNumber = this.parent.options.note.slice(-1);
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
                            type: "Sampler",
                            options: {
                                ...this.parent.options,
                                note: noteRow1[i] + sn,
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
                            type: "Sampler",
                            options: {
                                ...this.parent.options,
                                note: noteRow2[i] + sn,
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
                            type: "Sampler",
                            options: {
                                ...this.parent.options,
                                note: noteRow3[i] + sn,
                            }
                        })
                    }
                    break;

            }
        }
    },
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
        <div class="note-section">
            <input v-model="this.parent.options.note" @input="e => onNoteChange(e.target.value)" />
            <div class="main-button create-scale" v-on:click="createScale(1)">QWE</div>
            <div class="main-button create-scale" v-on:click="createScale(2)">ASD</div>
            <div class="main-button create-scale" v-on:click="createScale(3)">ZXC</div>
        </div>
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