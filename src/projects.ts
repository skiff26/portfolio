import type { ProjectFull } from '@/interfaces'
import i18n from './i18n'

const projects: ProjectFull[] = [
  {
    id: 1,
    title: 'Vue.js Drag and Drop',
    get text() {
      return i18n.global.t('projects.library')
    },
    links: [
      { link: 'https://skiff26.github.io/dragdrop', name: 'View Site' },
      { link: 'https://github.com/skiff26/dragdrop', name: 'Github' }
    ]
  },
  {
    id: 2,
    title: 'Vue.js Accurate Timer',
    get text() {
      return i18n.global.t('projects.timer')
    },
    links: [
      { link: 'https://skiff26.github.io/vue-timer/', name: 'View Site' },
      { link: 'https://github.com/skiff26/vue-timer', name: 'Github' }
    ]
  },
  {
    id: 3,
    title: 'GuessRegion',
    get text() {
      return i18n.global.t('projects.guessregion')
    },
    links: [{ link: 'https://guessregion.netlify.app/', name: 'View Site' }]
  },
  {
    id: 4,
    title: 'Minesweeper',
    get text() {
      return i18n.global.t('projects.minesweeper')
    },
    links: [
      { link: 'https://skiff26.github.io/minesweeper', name: 'View Site' },
      { link: 'https://github.com/skiff26/minesweeper', name: 'Github' }
    ]
  },
  {
    id: 5,
    title: 'Timefrom',
    get text() {
      return i18n.global.t('projects.timefrom')
    },
    links: [
      { link: 'https://artemkulczycki.github.io/timefrom/', name: 'View Site' },
      { link: 'https://github.com/artemkulczycki/timefrom', name: 'Github' }
    ]
  }
]

export default projects
