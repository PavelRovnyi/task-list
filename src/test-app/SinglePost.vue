<template>
  <div class="p-4 bg-white rounded-lg shadow-md">
    <p class="text-lg font-bold mb-2">Likes: {{ likes }}</p>
    <p class="text-lg font-bold mb-2">Dislikes: {{ dislikes }}</p>
    <div class="flex justify-center gap-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="incrementLikes"
      >
        Like
      </button>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        @click="incrementDislikes"
      >
        Dislike
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const likes = ref(0)
const dislikes = ref(0)

const incrementLikes = () => {
  console.log(likes);
  
  likes.value++
}

const incrementDislikes = () => {
  dislikes.value++
}
</script>

<style>
button:focus {
  outline: none;
}
</style>
