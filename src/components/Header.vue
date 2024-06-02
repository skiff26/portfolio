<template>
	<header class="header">
		<div @click="projectStore.setProject(0)"><img src="/logo.svg" alt="Logo"></div>
		<ul class="header__links">
			<li v-for="item of links" :key="item.name">
				<a :href="item.link" target="_blank">
					<BaseIcon :name="item.name" wh="25.25" />
				</a>
			</li>
		</ul>
	</header>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import type { Link } from '@/interfaces'
import { useProjectStore } from '@/stores/ProjectStore'
const projectStore = useProjectStore()

const links: Link[] = [
	{
		name: 'telegram',
		link: 'https://t.me/skiff_16'
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
	user-select: none;
	z-index: 1;

	img {
		transition: all 0.3s ease;
		cursor: pointer;

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