<template>
  <div class="btn-wrap flex justify-between">
    <CustomBtn
      @click="openPopup"
      :customClass="'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-5'"
      >Create Post
    </CustomBtn>

    <CustomSelect v-model:selectedOption="selectedSort" :options="sortOptions"> </CustomSelect>
  </div>

  <CustomModal @showDialog="closeModal" v-show:showDialog="dialogVisible">
    <CratePostForm @new-post="handleNewPost"></CratePostForm>
  </CustomModal>

  <PostsList v-if="!isPostsLoading" @remove="removePost" :posts="sortedPosts"> </PostsList>
  <h3 v-else class="text-3xl font-bold dark:text-white text-center">Loading...</h3>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import CratePostForm from '@/test-app/CreatePostForm.vue'
import PostsList from '@/test-app/PostsList.vue'
import type { Post, Option } from '@/test-app/types'
import axios from 'axios'

function handleNewPost(newPost: Post) {
  defaultPosts.value.push(newPost)
  dialogVisible.value = false
}

let dialogVisible = ref(false)
let defaultPosts = ref<Array<Post>>([])
let isPostsLoading = ref(false)
let selectedSort = ref('')
let sortOptions = ref<Array<Option>>([
  { value: 'title', name: 'By name' },
  { value: 'body', name: 'By content' },
  { value: 'id', name: 'By ID' }
])

const openPopup = () => {
  dialogVisible.value = true
}

const closeModal = () => {
  dialogVisible.value = false
}

const removePost = (post: Post) => {
  defaultPosts.value = defaultPosts.value.filter((p) => p.id !== post.id)
}

const fetchPosts = async function (postLimit: number = 10) {
  try {
    isPostsLoading.value = true
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}`
    )

    defaultPosts.value = response.data
  } catch (e) {
    alert('Something went wrong')
  } finally {
    isPostsLoading.value = false
  }
}

const sortedPosts = computed(() => {
  const sortOption = selectedSort.value;
  
  return defaultPosts.value.slice().sort((post1, post2) => {
    const value1 = post1[sortOption];
    const value2 = post2[sortOption];
    
    if (sortOption === 'id') {
      return (value1 as number) - (value2 as number);
    } else if (typeof value1 === 'string' && typeof value2 === 'string') {
      return value1.localeCompare(value2);
    } else {
      return 0; // Handle other cases as needed
    }
  });
});



onMounted(() => {
  fetchPosts(6)
})
</script>
