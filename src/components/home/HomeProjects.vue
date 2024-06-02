<template>
  <aside class="projects">
    <h2>{{ $t('projects.title') }}</h2>
    <div class="projects__wrapper">
      <div class="projects__list">
        <button
          v-for="project of projects"
          :key="project.name"
          @click="setProject(project.id)"
        >
          <span>{{ project.name }}</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Project } from '@/interfaces'
import { useProjectStore } from '@/stores/ProjectStore'
import { setGradientVariables } from '@/utils/gradient'
const projectStore = useProjectStore()

const setProject = (id: number) => {
  projectStore.setProject(id)
  setGradientVariables()
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Vue.js Drag and Drop'
  },
  {
    id: 2,
    name: 'Vue.js Accurate Timer'
  },
  {
    id: 3,
    name: 'GuessRegion'
  },
  {
    id: 4,
    name: 'Timefrom'
  },
  {
    id: 5,
    name: 'GTA UI'
  }
]
</script>
