<template>
  <div class="flex items-center justify-between mb-2">
    <input
      v-model="newTask"
      type="text"
      name="create-task"
      id="create-task"
      autocomplete="off"
      placeholder="Enter task name"
      class="mr-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-teal-500 block w-full rounded-md sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
    /><button
      title="Add Task"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Create
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue' 

const tasks = ref<string[]>([])
const newTask = ref<string>('')

const addTask = () => {
  if (newTask.value) {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}
</script>
