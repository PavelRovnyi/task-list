<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
    <PostsList 
    v-for="post in posts" 
    :key="post.id" 
    :post="post"
    @remove:post="$emit('remove', post)">
  </PostsList>
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
