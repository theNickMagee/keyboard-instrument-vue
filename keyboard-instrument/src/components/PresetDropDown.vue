

<script>
import { store } from '../state/store.js'
import presetServices from '../services/presetServices.js';
export default {
    data() {
    return {
      selected: '',
      options: store.presets
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
<div class="preset-dd">
  <select class="preset-sel" v-model="selected" @change="onSelect(selected)">
    <option disabled value="">Please Select</option>
    <option v-for="option in options" :value="option">{{option.name}}</option>
  </select>
  <!-- <span style="padding-left:5%">Your Choice is: {{selected}}</span> -->
</div>
</template>


<style scoped>
.preset-dd{
    background: var(--primary-color);
    cursor: pointer;
    margin: 0 0.5rem;
    border: none;
    border-radius: 10px;

}

.preset-sel{
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: var(--color-text)
}
</style>


