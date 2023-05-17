<template>
  <div class="p-4 bg-white rounded-lg shadow-md">
    <p class="text-lg font-bold mb-2">Likes: {{ countLikes.number.toFixed(0) }}</p>
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

      <h3 class="text-3xl font-bold dark:text-white text-center">
        Type a number: <input class="w-20" type="number" v-model.number="number" />
        {{ tweened.number.toFixed(0) }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'

const likes = ref(0)
const dislikes = ref(0)

const incrementLikes = () => {
  console.log(likes)

  likes.value++
}

const incrementDislikes = () => {
  dislikes.value++
}

const countLikes = reactive({
  number: 0
})

watch(countLikes, (n) => {
  gsap.to(countLikes, { duration: 0.5, number: Number(n) || 0 })
})

const number = ref(0)
const tweened = reactive({
  number: 0
})

watch(number, (n) => {
  gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
})
</script>
