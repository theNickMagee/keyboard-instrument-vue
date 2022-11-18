<script >
import KeyBindings from './components/KeyBindings.vue';
import MainActions from './components/MainActions.vue';

import { store } from './state/store.js';

export default {
    data() {
        return {
            store
        };
    },
    methods: {
        addNewKey() {
            this.keys.push({
                key: "a",
                type: "Frequency"
            });
        }
    },
    components: { KeyBindings, MainActions}
}
</script>

<template>


  <main>
    
      <MainActions />

    <KeyBindings />
  </main>
</template>

<style scoped>

</style>
