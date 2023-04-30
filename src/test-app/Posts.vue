<template>
  <PostsList :posts="DefaultPosts"></PostsList>
  <CratePostForm></CratePostForm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CratePostForm from '@/components/posts/CratePostForm.vue'
import PostsList from '@/test-app/PostsList.vue'
import type { Post } from '@/test-app/types'

const DefaultPosts = ref<Array<Post>>([
  {
    id: 1,
    title: 'Post 1',
    body: 'This is the first post.'
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'This is the second post.'
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'This is the third post.'
  },
  {
    id: 4,
    title: 'Post 4',
    body: 'This is the fourth post.'
  },
  {
    id: 5,
    title: 'Post 5',
    body: 'This is the fifth post.'
  },
  {
    id: 6,
    title: 'Post 6',
    body: 'This is the sixth post.'
  }
])
</script>
