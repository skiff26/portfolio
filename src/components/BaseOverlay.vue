<template>
	<div class="overlay" :class="{white : white}"></div>
</template>
<script>
export default {
	props: {
		white: {
			type: Boolean
		}
	}
}
</script>
<style scoped lang="scss">
 .overlay {
	 display: block;
	 position: fixed;
	 z-index: 5;
	 top: 60px;
	 right: 0;
	 width: 100vw;
	 height: calc(100% - 60px - 160px);
	 background-color: #49424269;
 }
 .white {
	top: 0;
	height: 100%;
	background: transparent;
	background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
 }
</style>