<template>
  <div class="btn-wrap flex justify-between">
    <CustomBtn
      @click="openPopup"
      :customClass="'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-5'"
      >Create Post
    </CustomBtn>

    <CustomInput
      :id="'search-post'"
      v-model:inputValue="searchQuery"
      :inputPlaceholder="'Search...'"
      :inputClass="'border border-gray-300 rounded px-4 m-5 focus:outline-none focus:ring-2 focus:ring-blue-500'"
    ></CustomInput>

    <CustomSelect v-model:selectedOption="selectedSort" :options="sortOptions"> </CustomSelect>
  </div>

  <CustomModal @showDialog="closeModal" v-show:showDialog="dialogVisible">
    <CratePostForm @new-post="handleNewPost"></CratePostForm>
  </CustomModal>

  <PostsList v-if="!isPostsLoading" @remove="removePost" :posts="sortedAndSearchedPosts">
    <Pagination :currentPage="page" :totalPages="totalPages" @changePage="changePage"> </Pagination>
  </PostsList>

  <h3 v-else class="text-3xl font-bold dark:text-white text-center">Loading...</h3>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import CratePostForm from '@/test-app/CreatePostForm.vue'
import Pagination from '@/test-app/Pagination.vue'
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
let searchQuery = ref('')
let page = ref(1)
const limitPostsPrePage = 12
let totalPages = 0
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

const changePage = (newPage: number) => {
  page.value = newPage
}

const fetchPosts = async function () {
  try {
    isPostsLoading.value = true
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _page: page.value,
        _limit: limitPostsPrePage
      }
    })

    totalPages = Math.ceil(response.headers['x-total-count'] / limitPostsPrePage)

    defaultPosts.value = response.data
  } catch (e) {
    alert('Something went wrong')
  } finally {
    isPostsLoading.value = false
  }
}

const sortedPosts = computed(() => {
  const sortOption = selectedSort.value

  return defaultPosts.value.slice().sort((post1, post2) => {
    const value1 = post1[sortOption]
    const value2 = post2[sortOption]

    if (sortOption === 'id') {
      return (value1 as number) - (value2 as number)
    } else if (typeof value1 === 'string' && typeof value2 === 'string') {
      return value1.localeCompare(value2)
    } else {
      return 0 // Handle other cases as needed
    }
  })
})

const sortedAndSearchedPosts = computed(() => {
  const query = searchQuery.value.toString().toLowerCase().trim()
  let filteredPosts = sortedPosts.value.slice()

  if (query !== '') {
    filteredPosts = filteredPosts.filter((post) => post.title.toLowerCase().includes(query))
  }

  return filteredPosts
})

watch(page, (newPage) => {
  fetchPosts()
})

onMounted(() => {
  fetchPosts()
})
</script>
