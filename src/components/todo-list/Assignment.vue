<template>
  <li class="p-2 flex justify-between items-center">
    <label class="flex space-x-2 cursor-pointer">
      <input type="checkbox" v-model="assignment.isCompleted" />
      <span>{{ assignment.name }}</span>
    </label>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

export interface AssignmentInterface {
  name: string
  id: number
  isCompleted: boolean
  tag: string
}

const props = defineProps({
  assignment: {
    type: Object as PropType<AssignmentInterface>,
    required: true
  }
})
</script>
