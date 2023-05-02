<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">Create Post</h2>
    <form @submit.prevent="createPost">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="title">Title</label>
        <input
          v-model="title"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Enter title"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="body">Body</label>
        <textarea
          v-model="body"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="body"
          placeholder="Enter body"
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '@/test-app/types'

const title = ref('')
const body = ref('')

const emits = defineEmits({
  'new-post': (newPost: Post) => true
})

const posts: Post[] = []

const createPost = () => {
  if (!title.value.trim() || !body.value.trim()) return false

  const newPost = {
    id: Date.now(),
    title: title.value,
    body: body.value
  }
  emits('new-post', newPost)

  title.value = ''
  body.value = ''
}
</script>
