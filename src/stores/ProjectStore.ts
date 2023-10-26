import { defineStore } from 'pinia'
import projects from '@/projects'
import { ref } from 'vue'

export const useProjectStore = defineStore('ProjectStore', () => {
  const projectId = ref<number>(0)

  const setProject = (id: number) =>
    (projectId.value = id === projectId.value ? 0 : id)

  const getCurrentProject = () =>
    projectId.value
      ? projects.filter(item => item.id === projectId.value)[0]
      : ''

  return {
    projectId,
    setProject,
    getCurrentProject
  }
})
