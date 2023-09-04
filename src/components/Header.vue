<template>
	<header class="header">
		<router-link :to="{ name: 'home' }"><img src="/logo.svg" alt="Logo"></router-link>
		<ul class="header__links">
			<li v-for="item of links" :key="item.name">
				<a :href="item.link" target="_blank">
					<BaseIcon :name="item.name" wh="25.25"/>
				</a>
			</li>
		</ul>
	</header>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import type { Link } from '@/interfaces'

const links: Link[] = [
	{
		name: 'mail',
		link: 'mailto:artem.kulchitsky@gmail.com'
	},
	{
		name: 'github',
		link: 'https://github.com/skiff26'
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/in/akulchytskyi/'
	}
]
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	position: relative;
	z-index: 1;
	img {
		transition: all 0.3s ease;
		&:hover {
			transform: scale(1.1);
		}
	}
	&__links {
		display: flex;
		gap: 30px;
		li a svg {
			transition: all 0.3s ease 0s;
			&:hover {
				fill: white;
			} 
		}
	}
}
</style>