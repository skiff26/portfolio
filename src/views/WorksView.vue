<template>
	<div class="wrapper">
		<TheHeader v-if="!isSmall" />
		<TheHeaderMobile v-else />
		<TheAllWorks />
		<TheFooter />
	</div>
</template>

<script>
import resizeMixin from '@/mixins/resizeMixin';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import TheAllWorks from '../components/TheAllWorks.vue';
import TheHeaderMobile from '../components/TheHeaderMobile.vue';
export default {
	components: {
		TheHeader, TheFooter, TheHeaderMobile, TheAllWorks
	},
	mixins: [resizeMixin]
}
</script>