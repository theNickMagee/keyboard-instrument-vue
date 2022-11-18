<script>

import { store } from '../../state/store.js'

export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <input type="text" size="32" v-model="store.currentPresetName" name="fee" />
</template>