<script setup lang="ts">
import TaskList from './TaskList.vue'
import CreateTaskForm from './CreateTaskForm.vue'
import { ref } from 'vue'
export type Task = {
  id: string
  name: string
  createdAt: string
}

const tasks = ref<Task[]>([])

const addTask = (newTask: Task) => {
  if (newTask.name) {
    tasks.value.push(newTask)
  }
}
</script>
<template>
  <div class="bg-white border-gray-200 px-5 sm:px-6 py-3 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <CreateTaskForm @create="addTask" type="primary"></CreateTaskForm>
    </div>
  </div>

  <div class="container mx-auto">
    <div class="h-full mx-auto relative">
      <TaskList :tasks="tasks"></TaskList>
      <slot></slot>
    </div>
  </div>
</template>
