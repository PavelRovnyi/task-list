<template>
  <input
    :value="postTitle"
    @input="handleInput"
    :class="inputClass"
    :id="id"
    :type="type"
    :placeholder="inputPlaceholder"
    autocomplete="off"
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
  id: {
    type: String,
    default: ''
  },

  type: {
    type: String,
    default: 'text'
  },
  inputPlaceholder: {
    type: String,
    default: 'Enter title'
  },
  inputClass: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:postTitle'])

const handleInput = (event: MyInputEvent) => {
  const inputValue = event.target.value
  emits('update:postTitle', inputValue)
}
</script>
