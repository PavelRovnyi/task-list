<script setup lang="ts">
import TaskList from './TaskList.vue'
import CreateTaskForm from './CreateTaskForm.vue'
</script>
<template>


<div class="bg-white border-gray-200 px-5 sm:px-6 py-3 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <CreateTaskForm></CreateTaskForm>
  </div>
</div>

  <div class="container mx-auto">
    <div class="h-full mx-auto relative">
      <TaskList></TaskList>
    </div>
  </div>
</template>
