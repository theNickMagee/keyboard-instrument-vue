<script>
import LooperPad from './LooperPad.vue';
import { store } from '../../state/store.js'
import samplerServices from '../../services/samplerServices';

export default {
    data() {
        return {
            store,
        };
    },
    props: ['parentKey'],
    methods: {
        toggleLooping() {
            this.parentKey.options.loop = !this.parentKey.options.loop;
            if (this.parentKey.options.loop) {
                samplerServices.scheduleSamplePlay(this.parentKey)
            } else {
                samplerServices.cancelScheduledLoop(this.parentKey)
            }
        }
    },
    components: { LooperPad }
}
</script>

<template>
    <div class="looper-pads">
        <LooperPad :n="1" :parent-key="this.parentKey" />
        <LooperPad :n="2" :parent-key="this.parentKey" />
        <LooperPad :n="3" :parent-key="this.parentKey" />
        <LooperPad :n="4" :parent-key="this.parentKey" />
        <LooperPad :n="5" :parent-key="this.parentKey" />
        <LooperPad :n="6" :parent-key="this.parentKey" />
        <LooperPad :n="7" :parent-key="this.parentKey" />
        <LooperPad :n="8" :parent-key="this.parentKey" />
    </div>
    <div class="looper-pads">
        <LooperPad :n="9" :parent-key="this.parentKey" />
        <LooperPad :n="10" :parent-key="this.parentKey" />
        <LooperPad :n="11" :parent-key="this.parentKey" />
        <LooperPad :n="12" :parent-key="this.parentKey" />
        <LooperPad :n="13" :parent-key="this.parentKey" />
        <LooperPad :n="14" :parent-key="this.parentKey" />
        <LooperPad :n="15" :parent-key="this.parentKey" />
        <LooperPad :n="16" :parent-key="this.parentKey" />

        <div class="loop-button" :class="{ onLoop: this.parentKey.options.loop }" @click="toggleLooping">L</div>
    </div>
</template>

<style scoped>
.looper-pads {
    display: flex;
    width: 100%;
}



.loop-button {
    height: 15px;
    width: 15px;
    margin-left: 10px;
    background-color: var(--loop-button-color);
    text-align: center;
    line-height: normal;
    cursor: pointer;
    user-select: none;

}

.onLoop {
    background-color: rgb(254, 149, 68);
}
</style>