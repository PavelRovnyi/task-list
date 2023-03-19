<template>
  <div>
    <h2>Tasks</h2>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask">
      <button>Add Task</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
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

const removeTask = (index: number) => {
  tasks.value.splice(index, 1)
}
</script>