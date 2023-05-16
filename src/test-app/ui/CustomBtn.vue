<template>
  <button :class="customClass">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const name: string = 'CustomBtn'

defineProps({
  customClass: {
    type: String,
    default: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-5 rounded'
  },
 
})
</script>
