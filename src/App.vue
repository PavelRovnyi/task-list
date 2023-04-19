<script setup lang="ts">
import Assignments from './components/todo-list/Assignments.vue'
import TaskManager from './components/task-manager/TaskManager.vue'
import Test from './components/Test.vue'
import Header from './components/Header.vue'
import Posts from '@/components/posts/Posts.vue'
import CratePostForm from './components/posts/CratePostForm.vue'
</script>

<template>
  <Header></Header>
  <CratePostForm></CratePostForm>
  <Posts></Posts>
</template>
