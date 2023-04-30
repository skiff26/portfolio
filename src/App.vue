<script setup>
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
store.dispatch('getIP')
</script>

<template>
  <RouterView />
</template>
