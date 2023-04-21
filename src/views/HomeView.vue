<template>
	<div class="wrapper">
		<TheHeader v-if="!isSmall"/>
		<TheHeaderMobile v-else/>
		<TheMain />
		<TheFooter />
		<teleport to='body'>
			<transition>
				<SettingsDialog v-if="settingsStatus" />
			</transition>
		</teleport>
	</div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import TheMain from '../components/TheMain.vue'
import TheHeaderMobile from '../components/TheHeaderMobile.vue';
import SettingsDialog from '../components/SettingsDialog.vue';
import { mapGetters } from 'vuex'

export default {
	components: {
    TheHeader,
    TheFooter,
    TheMain,
    TheHeaderMobile,
	 SettingsDialog
	},
	data () {
		return {
			isSmall: false,
		}
	}, 
	computed: {
		...mapGetters(['settingsStatus'])
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