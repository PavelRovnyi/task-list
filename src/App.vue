<script setup lang="ts">
import { ref } from 'vue';
import Form from './components/Form.vue';
const rootComponentValue = ref(1);

const addValue = () => {
  rootComponentValue.value++;
  console.log(rootComponentValue.value);
};

const updateRootValue = (newVal: number) => {
  rootComponentValue.value = newVal;
};
</script>

<template>
  <div class="container mx-auto py-2">
    <Form :value="rootComponentValue" @update-internal-value="updateRootValue" />
    <button @click="addValue">Add</button>
  </div>
</template>