<template>
  <div class="flex items-center justify-between mb-2">
    <input
      v-model="taskName"
      type="text"
      name="create-task"
      id="create-task"
      autocomplete="off"
      placeholder="Enter task name"
      class="hover:border-teal-700 mr-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-teal-500 block w-full rounded-md sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
    />
    <div class="mt-1 mb-1">
      <select
        v-model="priorityValue"
        class="hover:border-teal-700 mr-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-teal-500 block w-35 rounded-md sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
      >
        <option value="" disabled selected>Select your Priority</option>
        <option v-for="priority in priorities" :value="priority">{{ priority }}</option>
      </select>
    </div>

    <div class="mt-1 mb-1">
      <select
        v-model="sprintValue"
        class="hover:border-teal-700 mr-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-teal-500 block w-50 rounded-md sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
      >
        <option value="" disabled selected>Select sprint</option>
        <option v-for="sprint in sprints" :value="sprint">{{ sprint }}</option>
      </select>
    </div>
    <button
      @click="
        () => {
          if (taskName.trim() !== '') {
            emit('create', {
              id: new Date().getTime().toString(),
              name: taskName,
              priority: priorityValue,
              sprint: sprintValue,
              createdAt: new Date().toLocaleString(),
              timeSpend: 0
            })
            taskName = ''
            priorityValue = ''
            sprintValue = ''
          }
        }
      "
      title="Add Task"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Create
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['create'])
const taskName = ref<string>('')
const priorityValue = ref<string>('')
const sprintValue = ref<string>('')
const priorities = ['low', 'medium', 'hight', 'top']
const sprints = ['sprint 1', 'sprint 2', 'backlog']
</script>
