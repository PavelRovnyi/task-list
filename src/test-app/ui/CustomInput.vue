<template>
  <input
    :value="postTitle"
    @input="handleInput"
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    :id="name"
    :type="type"
    placeholder="Enter title"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface MyInputEvent extends Event {
  target: HTMLInputElement
}

const name = 'CustomInput'

defineProps({
  postTitle: {
    type: String || Number,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  inputPlaceholder: {
    type: String,
    default: 'Enter title'
  }
})

const emits = defineEmits(['update:postTitle'])

const handleInput = (event: MyInputEvent) => {
  console.log(event)

  const inputValue = event.target.value
  emits('update:postTitle', inputValue)
}
</script>
