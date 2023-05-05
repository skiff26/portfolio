<script setup>
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
store.dispatch('getIP')
store.dispatch('getEnlgishPosts')
</script>

<template>
  <RouterView v-slot="{ Component }">
	<transition name="fade" mode="out-in">
		<component :is="Component" />
	</transition>
  </RouterView>
</template>
