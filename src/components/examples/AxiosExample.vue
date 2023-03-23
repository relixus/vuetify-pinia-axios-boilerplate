<template>
      <toast-default />
      <v-btn @click="reload">X</v-btn>
      <p v-for='t in todos'>{{ t.Todo }}</p>
  </template>
  
  <script setup>
  import { ref,onErrorCaptured } from 'vue'
  import ToastDefault from '../ToastDefault.vue'
  import http from '../../common/http-common'
  
  var todos = ref([])
  
  async function reload() {
    var res = await http.get('/todo');
    todos.value = res.data
  }
  </script>