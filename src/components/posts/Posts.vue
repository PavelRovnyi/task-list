<template>
  <div
    class="items-center justify-between max-w-screen-xl mx-auto p-4 mt-5 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div v-for="post in posts" key="post.id">
      <div
        class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {{ post.title }}
        </h2>
        <p class="mb-3 text-gray-500 dark:text-gray-400">
          {{ post.excerpt }}
        </p>
        <a
          :href="'post/' + post.id"
          class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
        >
          Learn more
          <svg
            class="w-6 h-6 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = [
  { id: 1, title: 'Test title 01!!!', excerpt: 'post excerpt 01', body: 'body text and other 01' },
  { id: 2, title: 'Test title 02', excerpt: 'post excerpt 02', body: 'body text and other 02' },
  { id: 2, title: 'Test title 03', excerpt: 'post excerpt 02', body: 'body text and other 03' }
]
</script>
