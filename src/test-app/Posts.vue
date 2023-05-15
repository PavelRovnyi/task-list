<template>
  <CustomBtn
    @click="openPopup"
    :class="'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-5'"
    >Create Post</CustomBtn
  >

  <CustomModal @showDialog="closeModal" v-show:showDialog="dialogVisible">
    <CratePostForm @new-post="handleNewPost"></CratePostForm>
  </CustomModal>

  <PostsList @remove="removePost" :posts="defaultPosts"> </PostsList>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CratePostForm from '@/test-app/CreatePostForm.vue'
import PostsList from '@/test-app/PostsList.vue'
import type { Post } from '@/test-app/types'
import axios from 'axios'

function handleNewPost(newPost: Post) {
  defaultPosts.value.push(newPost)
  dialogVisible.value = false
}

let dialogVisible = ref(false)
let defaultPosts = ref<Array<Post>>([])
let isPostsLoading = ref(false)

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

const fetchPosts = async function (postLimit: number = 10) {
  try {
    console.log(postLimit)
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}`
    )
    defaultPosts = response.data
    console.log(response)
  } catch (e) {
    alert('Something went wrong')
  }
}

onMounted(() => {
  fetchPosts(6)
})
</script>
