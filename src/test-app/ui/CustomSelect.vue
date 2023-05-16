<template>
  <select :class="[customClass]" v-model="selectedOption" @change="changeOption">
    <option disabled value="">Choose option...</option>

    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const name: string = 'CustomSelect'

defineProps({
  customClass: {
    type: String,
    default: 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-5'
  },
  selectedOption: {
    type: String
  },
  options: {
    type: Array,
    default: () => []
  }
})

const changeOption = (event: Event) => {
  const selectOption: string | null = (event?.target as HTMLSelectElement)?.value || null

  if (selectOption) {
    emits('changeSelectOption', selectOption)
  }
}

const emits = defineEmits({
  changeSelectOption: (selectOption: String) => true
})
</script>
