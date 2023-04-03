<template>
	<div class="wrapper">
		<TheHeader v-if="!isSmall"/>
		<TheHeaderMobile v-else/>
		<TheMain />
		<TheFooter />
	</div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import TheMain from '../components/TheMain.vue'
import TheHeaderMobile from '../components/TheHeaderMobile.vue';

export default {
	components: {
    TheHeader,
    TheFooter,
    TheMain,
    TheHeaderMobile
	},
	data () {
		return {
			isSmall: false,
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
<style lang="scss">
</style>