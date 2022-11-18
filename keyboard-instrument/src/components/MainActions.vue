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
                key: "a",
                type: "Frequency"
            });
        },
        savePreset(){
          presetServices.methods.savePreset();
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
    <div></div>
    <div class="main-button " @click="addNewKey">Add Key</div>
  </div>
 
  </div>
</template>


<style scope>

  .preset-buttons{
    display: flex;
  }
  .header-row{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem;
  }

  .actions{
    display: flex;
    width: 100%;
    flex-direction: column;
    border-bottom: 4px dotted var(--vt-c-divider-dark-1);
  }

  .add-key{
    justify-items: end;
  }
</style>