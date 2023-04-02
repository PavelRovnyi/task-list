<template>
  <section>
    <div v-if="assignments.length">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>{{ assignments.length }}</span>
      </h2>

      <AssignmentTags
        v-model:currentTag="currentTag"
        :initial-tags="assignments.map((a) => a.tag)"
      ></AssignmentTags>

      <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
        <Assignment
          v-for="assignment in filteredAssigments"
          :key="assignment.id"
          :assignment="assignment"
        ></Assignment>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type PropType, computed, ref } from 'vue'
import type { AssignmentInterface } from './Assignment.vue'
import Assignment from './Assignment.vue'
import AssignmentTags from './AssignmentTags.vue'

const currentTag = ref('all')

const props = defineProps({
  title: {
    type: String
  },
  assignments: {
    type: Array as PropType<AssignmentInterface[]>,
    default: () => []
  }
})

const filteredAssigments = computed(() => {
  if (currentTag.value === 'all') {
    return props.assignments
  }
  return props.assignments.filter((assignment) => assignment.tag === currentTag.value)
})
</script>
