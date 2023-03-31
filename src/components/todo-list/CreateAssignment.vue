<template>
  <form @submit.prevent="add">
    <div class="border border-gray-600 text-black">
      <input v-model="newAssigment" type="text" placeholder="New assigment..." class="p-2" />
      <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newAssigment = ref()

const $emit = defineEmits(['addNewAssigment'])

const add = () => {
  $emit('addNewAssigment', newAssigment.value)
  newAssigment.value = ''
}
</script>
