<template>
  <div class="wrap" v-if="posts.length > 0">
    <h3 class="text-3xl font-bold dark:text-white text-center">Posts list ({{ posts.length }})</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
      <transition-group name="post-list">
        <PostsList
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove:post="$emit('remove', post)"
        >
        </PostsList>
      </transition-group>
    </div>
  </div>
  <div v-else>
    <h3 class="text-3xl font-bold dark:text-white text-center mt-10 text-red-600">Empty list</h3>
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

<style scoped>
.post-list-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.post-list-leave-active {
  position: absolute;
}
</style>
