<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
    <div v-for="(post, index) in posts" :key="index" class="bg-white rounded-lg shadow-md p-4">
      <h2 class="text-lg font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-600">{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '@/test-app/types'

defineProps<{
  posts: {
    type: Array<Post>
    required: true
  }
}>()
</script>
