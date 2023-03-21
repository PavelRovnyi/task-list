<script setup lang="ts">
import { ref } from 'vue'
import Card from './components/Card.vue'

const tasks = ref<string[]>([])
const newTask = ref<string>('')

const addTask = () => {
  if (newTask.value) {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const removeTask = (index: number) => {
  tasks.value.splice(index, 1)
}
</script>
<template>
  <section>
    <header class="sticky top-0 bg-white shadow flex flex-col rounded border-b z-10 py-2 px-4">
      <div class="flex items-center justify-between">
        <h2 class="font-semibold text-slate-900">Tasks</h2>
      </div>

     <form @submit.prevent="addTask">
 
          <input
            v-model="newTask"
            class="my-5 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="add task"
            placeholder="Add task"
          />

          <button
            class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
          >
            Create Task
          </button>
      
      </form>
    </header>
    <ul
      class="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6"
    >
      <li v-for="(task, index) in tasks" :key="index">
        <Card></Card>
      </li>

    </ul>
  </section>
</template>


