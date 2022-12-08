<script>

import { store } from '../state/store.js'
import KeyBinding from './KeyBinding.vue';

export default {
  data() {
    return {
      store,
    };
  },
  components: { KeyBinding }
}
</script>


<template>
  <div>
    <div class="card-container">

      <KeyBinding v-for="key in this.store.keys" :val="key" />

    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 4px dotted var(--vt-c-divider-dark-1);

}
</style>