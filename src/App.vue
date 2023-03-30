<script setup lang="ts">
import Assignments from './components/todo-list/Assignments.vue'
</script>

<template>
  <div>
    <Assignments type="muted" :processing="true">My Slot</Assignments>
  </div>

</template>
