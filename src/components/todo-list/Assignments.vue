<template>
  <section class="mt-5 w-full space-y-6 flex flex-col">
    <button
      class="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="toDoList = !toDoList"
    >
      ToDO list
    </button>
    <template v-if="toDoList">
      <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
      <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
      <CreateAssignment @addNewAssigment="add"></CreateAssignment>
    </template>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive, type PropType } from 'vue'
import AssignmentList from './AssignmentList.vue'
import CreateAssignment from './CreateAssignment.vue'
import type { AssignmentInterface } from './Assignment.vue'

const toDoList = ref(false)

const filters = computed(() => {
  return {
    inProgress: assignments.filter((assignment) => !assignment.isCompleted),
    completed: assignments.filter((assignment) => assignment.isCompleted)
  }
})

const add = (newAssigment: PropType<AssignmentInterface>) => {
  if (newAssigment.name === undefined || newAssigment.name.trim().length === 0) return false
  assignments.push({
    name: newAssigment.name,
    isCompleted: false,
    id: assignments.length + 1,
    tag: newAssigment.tag
  })
}

let assignments = reactive([
  { name: 'Implement task', isCompleted: false, id: 1, tag: 'develop' },
  { name: 'Check result', isCompleted: false, id: 2, tag: 'develop' }
])
</script>
