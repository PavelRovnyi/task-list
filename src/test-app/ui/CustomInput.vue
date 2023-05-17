<template>
  <input
    :value="inputValue"
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

const name = 'CustomInput'

defineProps({
  inputValue: {
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

const emits = defineEmits(['update:inputValue'])

const handleInput = (event: Event) => {
  const inputValue: string | null = (event?.target as HTMLSelectElement)?.value || null

  if (inputValue) {
    emits('update:inputValue', inputValue)
  }
}
</script>
