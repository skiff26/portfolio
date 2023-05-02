<template>
	<div class="wrapper">
		<TheHeader v-if="!state.isSmall" :transparent="transparent"/>
		<TheHeaderMobile v-else :transparent="transparent"/>
		<main class="page">
			<TheWork/>
		</main>
		<TheFooter :transparent="transparent"/>
	</div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import TheHeaderMobile from '../components/TheHeaderMobile.vue'
import TheFooter from '../components/TheFooter.vue'
import TheWork from '../components/TheWork.vue'
import { reactive, onMounted, onBeforeUnmount } from 'vue'

export default {
	components: {
		TheHeader, TheFooter, TheHeaderMobile, TheWork
	},

	setup(){
		const transparent = true
	
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
		return {
			state,
			transparent,
		}
	}
}
</script>