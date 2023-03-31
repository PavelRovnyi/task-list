<template>
  <section>
    <div v-if="assignments.length">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>{{ assignments.length }}</span>
      </h2>
      <ul class="border boder-gray-600 divide-y divide-gray-600">
        <Assignment
          v-for="assignment in assignments"
          :key="assignment.id"
          :assignment="assignment"
        ></Assignment>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { AssignmentInterface } from './Assignment.vue'
import Assignment from './Assignment.vue'

const props = defineProps({
  title: {
    type: String
  },
  assignments: {
    type: Array as PropType<AssignmentInterface[]>,
    default: () => []
  }
})
</script>
