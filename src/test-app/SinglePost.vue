<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <h2 class="text-lg font-bold mb-2">{{ post.title }}</h2>
    <p class="text-gray-600">{{ post.body }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/test-app/types'

defineProps<{
  post: Post
}>()
</script>
