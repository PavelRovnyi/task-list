<template>
  <header class="bg-gray-800">
    <nav class="container mx-auto px-4 py-2 flex items-center justify-between">
      <div>
        <a href="#" class="text-white text-xl font-bold">Logo</a>
      </div>
      <div>
        <ul class="flex space-x-4">
          <li><router-link class="text-white" to="/">Home</router-link></li>
          <li><router-link class="text-white" to="/posts">Posts</router-link></li>
          <li><router-link class="text-white" to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts"></script>
