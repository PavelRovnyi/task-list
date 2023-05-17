<template>
  <select :class="[customClass]" @change="changeOption" v-model="selectedOption">
    <option disabled selected value="">Choose option...</option>

    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import type { Option } from '@/test-app/types'

const name: string = 'CustomSelect'

const props = defineProps({
  customClass: {
    type: String,
    default:
      'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-5 min-w-[200px]'
  },
  selectedOption: {
    type: String,
    default: ''
  },
  options: {
    type: Array as () => Option[],
    default: () => []
  }
})

const selectedOption = ref(props.selectedOption)
const emits = defineEmits(['update:selectedOption'])

const changeOption = (event: Event) => {
  const selectOption: string | null = (event?.target as HTMLSelectElement)?.value || null

  if (selectOption) {
    emits('update:selectedOption', selectOption)
  }
}
</script>
