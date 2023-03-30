<template>
  <section v-show="inProgressAssignments.length">
    <h2 class="font-bold mb-2">In Progress</h2>
    <ul>
      <li v-for="assignment in inProgressAssignments" :key="assignment.id">
        <label>
          {{ assignment.name }}
          <input type="checkbox" v-model="assignment.complete" />
        </label>
      </li>
    </ul>
  </section>

  <section v-show="completedAssignments.length" class="mt-8">
    <h2 class="font-bold mb-2">Completed</h2>
    <ul>
      <li v-for="assignment in completedAssignments" :key="assignment.id">
        <label>
          {{ assignment.name }}
          <input type="checkbox" v-model="assignment.complete" />
        </label>
      </li>
    </ul>
  </section>

  <button
    :class="{
      'bg-gray-300 hover:bg-gray-500 border rounded px-5 py-2 disabled:cursor-not-allowed w-20': true,
      'bg-red-300 hover:bg-red-500 border rounded px-5 py-2 w-20': type === 'muted',
      'bg-green-300 hover:bg-green-500 border rounded px-5 py-2 w-20': type === 'primary',
      'bg-blue-300 hover:bg-blue-500 border rounded px-5 py-2 w-20': type === 'secondary',
      'is-loading': processing
    }"
    :disabled="processing"
  >
    slot: <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  processing: {
    disabled: Boolean,
    default: false
  }
})

const completedAssignments = computed(() => {
  return assignments.filter((assignment) => assignment.complete)
})

const inProgressAssignments = computed(() => {
  return assignments.filter((assignment) => !assignment.complete)
})

const assignments = reactive([
  { name: 'Start 01', complete: false, id: 1 },
  { name: 'Start 02', complete: false, id: 2 },
  { name: 'Start 03', complete: false, id: 3 }
])
</script>
