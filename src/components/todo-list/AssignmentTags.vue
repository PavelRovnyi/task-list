<template>
  <div flex gap-2>
    <button
      @click="$emit('update:currentTag', tag)"
      class="border-blue-500 border-black-600 rounded px-1 py-px text-xs"
      :class="{
        'border-red-500 text-red-500': tag === currentTag
      }"
      v-for="tag in tags"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  initialTags: Array,
  currentTag: String
})

const tags = computed(() => {
  return ['all', ...new Set(props.initialTags)]
})
</script>
