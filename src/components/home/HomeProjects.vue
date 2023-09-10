<template>
	<aside class="projects">
		<h2>{{ $t('projects') }}</h2>
		<div class="projects__wrapper">
			<div class="projects__list">
				<button v-for="project of projects" :key="project.name" @click="setProject(project.id)">
					<span>{{ project.name }}</span>
				</button>
				<a href="https://skiff26.github.io/old-portfolio/" target="_blank"><span>Old Portfolio &#8599;</span></a>
			</div>
		</div>
	</aside>
</template>

<script setup lang="ts">
import type { Project } from '@/interfaces'
import { useProjectStore } from '@/stores/ProjectStore'
const projectStore = useProjectStore()

const setProject = (id: number) => projectStore.setProject(id)

const projects: Project[] = [
	{
		id: 1,
		name: 'Vue.js Drag and Drop'
	},
	{
		id: 2,
		name: 'Minesweeper'
	},
	{
		id: 3,
		name: 'Timefrom'
	}
]
</script>