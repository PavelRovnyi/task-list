<template>
  <input type="text" v-model="name" />
  <br />
  <strong>{{ name }}</strong>

  <div v-if="currentType == 'typeA'">
    <p>{{ currentType }}</p>
  </div>
  <div v-else-if="currentType == 'typeB'">
    <p>{{ currentType }}</p>
  </div>
  <div v-else>
    <p>{{ currentType }}</p>
  </div>

  <select v-model="currentType">
    <option value="typeA">v-if</option>
    <option value="typeB">v-else-if</option>
    <option value="Other">v-else</option>
  </select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let name = ref('default string')

let currentType = ref('typeA')
</script>

<style>

</style>
