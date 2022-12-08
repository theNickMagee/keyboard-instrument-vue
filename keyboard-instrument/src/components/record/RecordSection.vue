
<script>
import recorderServices from '../../services/recorderServices';
import { store } from '../../state/store';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        handleRecord() {
            if (this.store.recording) {
                recorderServices.stopRecording();
            } else {
                recorderServices.startRecording();
            }
        }
    }
}
</script>

<template>
    <div class="top-buttons">
        <div class="secondary-button" v-on:click="handleRecord()">
            {{ this.store.recording ? "Stop" : "Record" }}
        </div>
    </div>
</template>

<style scoped>
.top-buttons {
    display: flex;
    width: 100%;
    justify-content: end;
    margin-top: 20px;
    padding-right: 15px;
}
</style>