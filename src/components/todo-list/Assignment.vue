<template>
  <li class="p-2 flex justify-between items-center">
    <label>
      {{ assignment.name }}
      <input type="checkbox" v-model="assignment.isCompleted" />
    </label>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

export interface AssignmentInterface {
  name: string
  id: number
  isCompleted: boolean
}

const props = defineProps({
  assignment: {
    type: Object as PropType<AssignmentInterface>,
    required: true
  }
})
</script>
