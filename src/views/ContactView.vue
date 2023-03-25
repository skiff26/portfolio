<template>
	<div class="wrapper">
		<TheHeader v-if="!isSmall" :transparent="transparent"/>
		<TheHeaderMobile v-else :transparent="transparent"/>
		<div class="page">
			<BaseOverlay />
			<TheContactMain />
		</div>
		<TheFooter :transparent="transparent"/>
	</div>
</template>
<script>
import BaseOverlay from '../components/BaseOverlay.vue';
import TheHeader from '../components/TheHeader.vue';
import TheHeaderMobile from '../components/TheHeaderMobile.vue'
import BaseIcon from '../components/BaseIcon.vue';
import TheFooter from '../components/TheFooter.vue';
import TheContactMain from '../components/TheContactMain.vue'
export default {
	components: {
	BaseOverlay,
   TheHeader,
   TheHeaderMobile,
   BaseIcon,
   TheFooter,
	TheContactMain
},
	data () {
		return {
			transparent: true,
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
<style lang="scss" scoped>
::-webkit-scrollbar {
	width: 0;
 }
</style>