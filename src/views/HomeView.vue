<template>
	<div class="wrapper">
		<TheHeader v-if="!isSmall"/>
		<TheHeaderMobile v-else/>
		<TheMain/>
		<TheFooter />
	</div>
</template>
<script>
import resizeMixin from '@/mixins/resizeMixin';
import TheMain from '../components/TheMain.vue';
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeaderMobile from '../components/TheHeaderMobile.vue';

export default {
	components: {
    TheMain,
    TheHeader,
    TheFooter,
    TheHeaderMobile,
	},
	mixins: [resizeMixin],
}
</script>