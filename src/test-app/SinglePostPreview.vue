<template>
  <div class="bg-white rounded-lg shadow-md p-4 post-list-item">
    <h2 class="text-lg font-bold mb-2">{{ post.title }} - {{ post.id }}</h2>
    <p class="text-gray-600">{{ post.body }}</p>

    <div class="btn-wrap flex justify-between">
      <CustomBtn @click="removePost(post)">Remove</CustomBtn>

      <CustomBtn
        :customClass="'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded'"
        @click="$router.push(`/posts/${post.id}`)"
        >Open</CustomBtn
      >
    </div>
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
