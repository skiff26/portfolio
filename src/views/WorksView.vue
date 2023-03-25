<template>
	<div class="wrapper">
		<TheHeader v-if="!isSmall" :transparent="transparent"/>
		<TheHeaderMobile v-else :transparent="transparent"/>
		<TheAllWorks />
		<TheFooter :transparent="transparent"/>
	</div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheHeaderMobile from '../components/TheHeaderMobile.vue'
import TheFooter from '../components/TheFooter.vue'
import TheAllWorks from '../components/TheAllWorks.vue'
export default {
	components: {
		TheHeader, TheFooter, TheHeaderMobile, TheAllWorks
	},
	data(){
		return {
			isSmall: false,
			transparent: false,
		}
	},
	methods: {
		onResize(){
			if(window.innerWidth < 768){
				this.isSmall = true
			} else {
				this.isSmall = false
			}
		}
	},
	mounted(){
		this.onResize()
		addEventListener('resize', this.onResize)

	}
}
</script>