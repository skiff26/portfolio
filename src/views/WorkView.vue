<template>
	<div class="wrapper">
		<TheHeader v-if="!isSmall" :transparent="true"/>
		<TheHeaderMobile v-else :transparent="true"/>
		<main class="page">
			<TheWork/>
		</main>
		<TheFooter :transparent="true"/>
	</div>
</template>
<script setup>
import TheWork from '../components/TheWork.vue';
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeaderMobile from '../components/TheHeaderMobile.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'

let isSmall = ref(false)

const onResize = () => {
	isSmall.value = window.innerWidth < 769
}

onMounted(() => {
	onResize()
	window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', onResize)
})
</script>