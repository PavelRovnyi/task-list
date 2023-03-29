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
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

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
