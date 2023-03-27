<template>
  <section>
    <header class="sticky top-0 bg-white shadow flex flex-col rounded border-b z-10 py-2 px-4">
      <div class="flex items-center justify-between">
        <h2 class="font-semibold text-slate-900">Tasks</h2>
      </div>

     <form @submit.prevent="addTask">

        <input
          class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Filter projects"
          placeholder="Filter projects..."
        />
 
          <input
            v-model="newTask"
            class="my-5 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-50 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="add task"
            placeholder="Add the task name"
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
        <a :href="'#'">
          <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div>
              <dt class="sr-only">Title</dt>
              <dd class="group-hover:text-white font-semibold text-slate-900">{{ task }}</dd>
              <button @click="removeTask(index)" class="btn btn--primary">Remove</button>
            </div>
            <div>
              <dt class="sr-only">Category</dt>
              <dd class="group-hover:text-blue-200">{task.category}</dd>
            </div>
          </dl>
        </a>
      </li>
      <li class="flex">
        <a
          href="/new"
          class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
        >
          <svg
            class="group-hover:text-blue-500 mb-1 text-slate-400"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
            />
          </svg>
          New task
        </a>
      </li>
    </ul>
  </section>
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

const removeTask = (index: number) => {
  tasks.value.splice(index, 1)
}
</script>
