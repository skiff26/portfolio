<template>
	<div class="wrapper">
		<TheHeader v-if="!isSmall" :transparent="true"/>
		<TheHeaderMobile v-else :transparent="true"/>
		<div class="page">
			<BaseOverlay />
			<TheContactMain />
		</div>
		<TheFooter :transparent="true"/>
	</div>
</template>
<script>
import resizeMixin from '@/mixins/resizeMixin';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import BaseOverlay from '@/components/BaseOverlay.vue';
import TheContactMain from '@/components/TheContactMain.vue';
import TheHeaderMobile from '@/components/TheHeaderMobile.vue';

export default {
	components: {
		TheFooter,
		TheHeader,
		BaseOverlay,
		TheContactMain,
		TheHeaderMobile
	},
	mixins: [resizeMixin]
}
</script>