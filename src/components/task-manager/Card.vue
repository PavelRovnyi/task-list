<template>
  <div class="flex flex-col items-start h-full bg-white p-3 rounded-lg shadow">
    <div class="flex flex-col w-full mb-2 h-full border-b">
      <div class="flex items-center justify-between text-lg pb-1">
        <div class="flex items-center gap-2">
          <div
            class="flex items-center font-semibold min-h-[20px] min-w-[50px] max-w-[240px] cursor-pointer"
          >
            <h3 class="truncate" :title="task.name">
              {{ task.name }}
            </h3>
          </div>
          <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
        </div>
        <button class="text-red-500 hover:text-red-700 w-3" title="Remove">
          <svg
            class="svg-inline--fa fa-trash fa-lg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="trash"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              class=""
              fill="currentColor"
              d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
            ></path>
          </svg>
        </button>
      </div>
      <!---->
    </div>
    <div class="w-full flex items-center justify-between">
      <div
        class="flex items-center justify-center text-left px-2 rounded-lg text-sm capitalize font-semibold cursor-pointer bg-red-600 text-white py-1"
      >
        <span>{{ task.priority }}</span
        ><!---->
      </div>
      <div class="flex flex-grow items-center justify-center">
        <span class="text-md font-bold">0s</span>
      </div>
      <div class="flex items-center justify-end gap-4">
        <button class="w-5 text-green-500 hover:text-green-700" title="Resume">
          <svg
            class="svg-inline--fa fa-circle-play fa-xl"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="circle-play"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              class=""
              fill="currentColor"
              d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"
            ></path>
          </svg>
        </button>
        <button class="w-4 text-green-500 hover:text-green-700" title="Complete">
          <svg
            class="svg-inline--fa fa-flag-checkered fa-xl"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="flag-checkered"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              class=""
              fill="currentColor"
              d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.4-23.7-122.5-13.4L64 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V400 334 64 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9v65.5L64 252.6V318l48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3V238.7l38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9v66.7l-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8v71.4c21.8 1.9 43.3 6.7 64 14.4V244.2l22.7 6.7c13.5 4 27.3 6.4 41.3 7.4V194c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12v-62c-13-3.8-25.8-8.8-38.2-15c-8.2-4.1-16.9-7-25.8-8.8v72.4c-13-.4-26 .8-38.7 3.6L128 173.2V98L64 114v73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2V251.9l-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5v77.4zm64-149.4V115.4c-20.9 6.1-42.4 9.1-64 9.1V194c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z"
            ></path>
          </svg></button
        ><!---->
      </div>
    </div>
    <Assignments></Assignments>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Task } from './TaskManager.vue'
import Assignments from '../../components/todo-list/Assignments.vue'
const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true
  }
})


</script>
