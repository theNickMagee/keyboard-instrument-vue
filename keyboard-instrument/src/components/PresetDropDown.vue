

<script>
import { store } from '../state/store.js'
import presetServices from '../services/presetServices.js';
export default {
  data() {
    return {
      selected: '',
      store
    };
  },
  methods: {
    onSelect(p) {
      // change name and keys
      presetServices.methods.loadPreset(p)
    }
  },
}

</script>

<template>
  <div class="base-dd">
    <select class="base-sel" v-model="selected" @change="onSelect(selected)">
      <option disabled value="">Please Select</option>
      <option v-for="option in store.presets" :value="option">{{ option.name }}</option>
    </select>
    <!-- <span style="padding-left:5%">Your Choice is: {{selected}}</span> -->
  </div>
</template>


<style scoped>

</style>


