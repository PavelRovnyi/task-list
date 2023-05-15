<template>
  <div class="wrap" v-if="posts.length > 0">
    <h3 class="text-3xl font-bold dark:text-white text-center">Posts list ({{ posts.length }})</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
      <PostsList
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove:post="$emit('remove', post)"
      >
      </PostsList>
    </div>
  </div>
  <div v-else>
    <h3 class="text-3xl font-bold dark:text-white text-center mt-10 text-red-500">Empty list</h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Post } from '@/test-app/types'
import PostsList from '@/test-app/SinglePost.vue'

defineProps<{
  posts: Post[]
}>()
</script>
