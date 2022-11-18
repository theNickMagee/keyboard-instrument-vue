<script >
import KeyBindings from './components/KeyBindings.vue';
import MainActions from './components/MainActions.vue';
import KeyListener from './components/KeyListener.vue';
import { store } from './state/store.js';

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        keyDown(details) {
            console.log("keyDown: ", details)
        }
    },
    components: { KeyBindings, MainActions }
}
</script>

<template>
    <main>
        <MainActions />
        <KeyBindings />
        <KeyListener />
    </main>
</template>

<style scoped>

</style>
