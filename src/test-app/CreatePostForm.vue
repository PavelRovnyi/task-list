<template>
  <div class="max-w-md mx-auto mt-8">
    <h2 class="text-2xl font-bold mb-4">Create Post</h2>
    <form @submit.prevent="createPost">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="create-post-id">Title</label>
        <CustomInput
          :id="'create-post-id'"
          v-model:postTitle.trim="title"
          :inputPlaceholder="'Enter title'"
          :inputClass="'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'"
        ></CustomInput>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="body">Body</label>
        <textarea
          v-model.trim="body"
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
  console.log(title.value)
  console.log(body.value)
  if (!title.value || !body.value) return false

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
