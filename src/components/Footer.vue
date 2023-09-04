<template>
	<footer class="footer">&copy;{{ year }} <a href="https://www.linkedin.com/in/akulchytskyi/" target="_blank">Artem Kulchytskyi</a></footer>
</template>

<script setup lang="ts">
const year: number = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
	position: relative;
	z-index: 1;
	text-align: right;
	font-size: 14px;
	padding: 35px 10px 10px;
	@media (max-width: 500px) {
		padding: 35px 0 0;
		text-align: center;
	}
	a {
		color: var(--c-text);
		transition: all 0.3s ease;
		&:hover {
			color: var(--c-text-hover);
		}
	}
}
</style>