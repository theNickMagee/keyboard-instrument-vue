<script>

import { store } from '../state/store.js'
import { keyOptions } from '../assets/constants';

export default {
  data() {
    return {
      store,
      keyOptions
    }
  }
}
</script>


<template>
  <div class="card-container">

    <div class="card" v-for="key in this.store.keys">
      <div class="">
        <select class="base-sel dd-bg" v-model="selected" @change="onSelect(selected)">
          <option disabled value="">Please Select</option>
          <option v-for="option in this.keyOptions" :value="option">{{ option }}</option>
        </select>
        <!-- <span style="padding-left:5%">Your Choice is: {{selected}}</span> -->
      </div>
      <div class="dropdown">
        <button class="dropbtn">Type</button>
        <div class="dropdown-content">
          <a href="#">Frequency</a>
          <a href="#">File/Clip</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  /* background-color: aqua; */
  margin: 25px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  background-color: var(--vt-c-divider-dark-2);
  padding: 24px 12px;
}

.dd-bg {
  background-color: rgb(127, 127, 127)
}

.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>