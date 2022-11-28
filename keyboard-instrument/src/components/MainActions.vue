<script>


import { store } from '../state/store.js'
import EditableTextField from './mini/EditableTextField.vue';
import PresetDropDown from './PresetDropDown.vue';
import presetServices from '../services/presetServices';

export default {
  data() {
    return {
      store
    };
  },
  methods: {
    addNewKey() {
      this.store.keys.push({
        key: "A",
        type: "Sampler",
        options: {
          type: "Bongo Snare",
          note: "C1",
          volume: 1,
          duration: 0.5,
          velocity: 1,
          loop: false,
          padsSet: [1, 8],
          looper: {}
        }
      });
    },
    savePreset() {
      presetServices.methods.savePreset();
    },
    loadPresets() {
      presetServices.methods.loadPresets();
    }
  },
  components: { EditableTextField, PresetDropDown }
}



</script>

<template>
  <div class="actions">
    <div class="header-row">
      <EditableTextField />
      <div class="preset-buttons">
        <PresetDropDown />
        <!-- <div class="main-button">Load Preset</div> -->
        <div class="secondary-button" @click="savePreset">Save Preset</div>
      </div>
    </div>
    <div class="header-row ">
      <div class="secondary-button " @click="loadPresets">Load Presets</div>
      <div class="main-button " @click="addNewKey">Add Key</div>
    </div>

  </div>
</template>


<style scope>
.preset-buttons {
  display: flex;
}

.header-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
}

.actions {
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 4px dotted var(--vt-c-divider-dark-1);
}

.add-key {
  justify-items: end;
}
</style>