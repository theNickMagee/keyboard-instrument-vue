<script>

import { store } from '../state/store.js'
import { keyOptions } from '../assets/constants';
import FrequencyOptions from './options/FrequencyOptions.vue';
import SamplerOptions from './options/SamplerOptions.vue';

export default {
    data() {
        return {
            store,
            keyOptions
        }
    },
    methods: {
        changeType(key, type) {
            this.store.keys.find((k, i) => {
                if (k.key === key) {
                    this.store.keys[i].type = type;
                }
            })
        }
    },
    props: ['val'],
    components: { FrequencyOptions, SamplerOptions }
}
</script>

<template>
    <div class="key-binding">
        <div class="basic-dds">

            <div class="">
                <select class="base-sel dd-bg" v-model="this.val.key">
                    <option disabled value="">Please Select</option>
                    <option v-for="option in this.keyOptions" :value="option">{{ option }}</option>
                </select>
                <!-- <span style="padding-left:5%">Your Choice is: {{selected}}</span> -->
            </div>
            <div class="dropdown">
                <button class="dropbtn">{{ this.val.type }}</button>
                <div class="dropdown-content">
                    <a class="" v-on:click="changeType(this.val.key, `Frequency`)">Frequency</a>
                    <!-- <a class="" v-on:click="changeType(key.key, `Clip`)">File/Clip</a> -->
                    <!-- <a class="" v-on:click="changeType(key.key, `MIDI`)">MIDI</a> -->
                    <!-- <a class="" v-on:click="changeType(key.key, `casio`)">Casio</a> -->
                    <a class="" v-on:click="changeType(this.val.key, `Sampler`)">Sampler</a>
                </div>
            </div>
        </div>
        <!-- Options here -->
        <div v-if="this.val.type === 'Frequency'">
            <FrequencyOptions :parent="this.val" />
        </div>
        <div v-else-if="this.val.type === 'Sampler'">
            <SamplerOptions :parent="this.val" />
        </div>
        <div v-else>
            No Options
        </div>
    </div>
</template>


<style scoped>
.key-binding {
    padding: 24px 12px;
    margin: 25px;
    width: 300px;
    background-color: var(--vt-c-divider-dark-2);


}

.basic-dds {
    /* background-color: aqua; */

    display: flex;
    justify-content: space-between;
}

.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    cursor: pointer;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
    background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>