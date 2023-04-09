<template>
  <form class="border border-gray-600 mt-10" @submit.prevent="add">
    <div class="flex text-black text-sm font-bold">
      <input v-model="newAssigment" type="text" placeholder="New assigment..." class="p-2" />

      <select
        class="px-4 py-3 border border-gray-400 divide-y "
        v-model="newAssigmentTag"
      >
        <option v-for="tag in tags" :value="tag">{{ tag.toUpperCase() }}</option>
      </select>

      <button
        type="submit"
        class="bg-yellow-500 text-white bg-slate-100 p-3 border border-blue-600 h-full w-full"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const newAssigment = ref()
const newAssigmentTag = ref('develop')

const $emit = defineEmits(['addNewAssigment'])

const props = defineProps({ 
  tags: Array,
})



const add = () => {
  $emit('addNewAssigment', { name: newAssigment.value, tag: newAssigmentTag })
  newAssigment.value = ''
}
</script>
