<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
       <h3 class="text-3xl font-bold dark:text-white text-center">Post with ID = {{ $route.params.id }}</h3>
      
    </header>

    <main class="container mx-auto px-4 py-8"></main>

    <footer class="bg-gray-200 py-4 flex justify-center">
      <CustomBtn
        :customClass="'bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-5 rounded '"
        @click="removePost(post)"
        >Remove</CustomBtn
      >
    </footer>
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
