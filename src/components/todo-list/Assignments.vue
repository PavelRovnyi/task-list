<template>
  <input type="text" v-model="name" />

  <p>Value: {{ name }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const name = ref()
</script>