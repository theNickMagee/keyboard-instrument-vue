<script >
import KeyBindings from './components/KeyBindings.vue';
import MainActions from './components/MainActions.vue';
import KeyListener from './components/KeyListener.vue';
import { store } from './state/store.js';
import keyServices from './services/keyServices';

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        keyDown(details) {
            // unfortunate: this gets called a bunch when we hold a key down :( means were gonna have to do some event checking
            // console.log("keyDown: ", details)
            keyServices.handleKeyDown(details.key.toUpperCase());
        },
        keyUp(details) {
            // keyServices.handleKeyRelease(details.key.toUpperCase());
            // console.log("keyUp: ", details)
        }
    },
    components: { KeyBindings, MainActions, KeyListener }
}
</script>

<template>
    <main>
        <MainActions />
        <KeyBindings />
        <KeyListener v-on:keyup="keyUp" v-on:keydown="keyDown" />
    </main>
</template>

<style scoped>

</style>
