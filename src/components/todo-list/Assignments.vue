<template>
  <section class="space-y-6 flex flex-col">

    
    <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
    <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
    <CreateAssignment @addNewAssigment="add"></CreateAssignment>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import AssignmentList from './AssignmentList.vue'
import CreateAssignment from './CreateAssignment.vue'

const filters = computed(() => {
  return {
    inProgress: assignments.filter((assignment) => !assignment.isCompleted),
    completed: assignments.filter((assignment) => assignment.isCompleted)
  }
})

const add = (name: string) => {
  assignments.push({
    name: name,
    isCompleted: false,   
    id: assignments.length + 1,
    tag: 'develop',
  })
}

let assignments = reactive([
  { name: 'Start 01', isCompleted: false, id: 1, tag: 'estimate' },
  { name: 'Start 02', isCompleted: false, id: 2, tag: 'investigate' },
  { name: 'Start 03', isCompleted: false, id: 3, tag: 'develop' },
  { name: 'Start 04', isCompleted: false, id: 3, tag: 'develop'}
])
</script>
