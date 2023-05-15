<template>
  <CustomBtn
    @click="openPopup"
    :class="'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'"
    >Create Post</CustomBtn
  >

  <CustomModal @showDialog="closeModal" v-show:showDialog="dialogVisible">
    <CratePostForm @new-post="handleNewPost"></CratePostForm>
  </CustomModal>

  <PostsList @remove="removePost" :posts="defaultPosts"> </PostsList>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CratePostForm from '@/test-app/CreatePostForm.vue'
import PostsList from '@/test-app/PostsList.vue'
import type { Post } from '@/test-app/types'

function handleNewPost(newPost: Post) {
  defaultPosts.value.push(newPost)
  dialogVisible.value = false
}

let dialogVisible = ref(false)

const openPopup = () => {
  dialogVisible.value = true
}

const closeModal = () => {
  console.log('closeModal from root')
  dialogVisible.value = false
}

const removePost = (post: Post) => {
  defaultPosts.value = defaultPosts.value.filter((p) => p.id !== post.id)
}

let defaultPosts = ref<Array<Post>>([
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
