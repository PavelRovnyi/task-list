<template>
  <div class="bg-white rounded-lg shadow-md p-4 post-list-item">
    <h2 class="text-lg font-bold mb-2">{{ post.title }} - {{ post.id }}</h2>
    <p class="text-gray-600">{{ post.body }}</p>

    <CustomBtn @click="removePost(post)">Remove</CustomBtn>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/test-app/types'
import { defineProps, defineEmits } from 'vue'

defineProps<{
  post: Post
}>()

const emits = defineEmits(['remove:post'])

const removePost = (post: Post) => {
  emits('remove:post', post)
}
</script>
