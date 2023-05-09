<template>
  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-5 rounded">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const name: string = 'CustomBtn'
</script>
