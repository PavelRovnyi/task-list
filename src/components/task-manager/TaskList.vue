<script setup lang="ts">
import type { PropType } from 'vue'
import Card from './Card.vue'
import type { Task } from './TaskManager.vue'

const props = defineProps({
  tasks: {
    type: Array as PropType<Task[]>,
    required: true
  }
})
</script>
<template>
  <div class="py-2 px-3 rounded">
    <div class="mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-4 text-gray-500 list-inside dark:text-gray-400"
      >
        <Card v-for="task in props.tasks" :key="task.id" :task="task" removeTask></Card>
      </div>
    </div>
  </div>
</template>
