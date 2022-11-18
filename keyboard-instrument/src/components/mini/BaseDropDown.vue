<template>
    <div class="preset-dd">
  <select class="preset-sel" v-model="selected" @change="onSelect(selected)">
    <option disabled value="">Please Select</option>
    <option v-for="option in options" :value="option">{{option.name}}</option>
  </select>
  <!-- <span style="padding-left:5%">Your Choice is: {{selected}}</span> -->
</div>
</template>

<!-- USE .name -->
<script>
export default {
    props: ['options, ']
}
</script>