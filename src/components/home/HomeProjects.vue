<template>
	<section class="main__projects">
		<h2>Projects</h2>
		<div class="main__projects-wrapper">
			<div class="main__projects-list">
				<button v-for="project of projects" :key="project.name">
					<span>{{ project.name }}</span>
				</button>
				<a href="https://skiff26.github.io/old-portfolio/" target="_blank"><span>Old Portfolio &#8599;</span></a>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { Project } from '@/interfaces'

const projects: Project[] = [
	{
		name: 'Vue.js Drag and Drop',
		link: '1'
	},
	{
		name: 'Minesweeper',
		link: '2'
	},
	{
		name: 'Timefrom',
		link: '3'
	}
]
</script>