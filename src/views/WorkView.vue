<template>
	<div class="wrapper">
		<TheHeader v-if="!state.isSmall" :transparent="true"/>
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
import { reactive, onMounted, onBeforeUnmount } from 'vue'

const state = reactive({
	isSmall: false,
	bgColor: '',
})

const onResize = () => {
	state.isSmall = window.innerWidth < 769
}

onMounted(() => {
	onResize()
	window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
	window.removeEventListener('resize', onResize)
})
</script>