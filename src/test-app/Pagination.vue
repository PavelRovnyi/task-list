<template>
  <div>
    <ul class="flex justify-center space-x-2">
      <li>
        <button
          :class="{
            'text-gray-500 cursor-not-allowed': currentPage === 1
          }"
          :disabled="currentPage === 1"
          @click="setCurrentPage(1)"
        >
          First
        </button>
      </li>
      <li>
        <button
          :class="{
            'text-gray-500 cursor-not-allowed': currentPage === 1
          }"
          :disabled="currentPage === 1"
          @click="setCurrentPage(currentPage - 1)"
        >
          Prev
        </button>
      </li>
      <li v-for="pageInList in totalPages" :key="pageInList">
        <button
          :class="{
            'bg-blue-500 text-white': currentPage === pageInList,
            'text-gray-500': currentPage !== pageInList
          }"
          @click="setCurrentPage(pageInList)"
        >
          {{ pageInList }}
        </button>
      </li>
      <li>
        <button
          :class="{
            'text-gray-500 cursor-not-allowed': currentPage === totalPages
          }"
          :disabled="currentPage === totalPages"
          @click="setCurrentPage(currentPage + 1)"
        >
          Next
        </button>
      </li>
      <li>
        <button
          :class="{
            'text-gray-500 cursor-not-allowed': currentPage === totalPages
          }"
          :disabled="currentPage === totalPages"
          @click="setCurrentPage(totalPages)"
        >
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const props = defineProps({
  totalPages: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    default: 1
  }
})

const currentPage = ref(props.currentPage)

const emits = defineEmits(['changePage'])

const setCurrentPage = (page: number) => {
  currentPage.value = page
  emits('changePage', page)
}
</script>
