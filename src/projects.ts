import type { ProjectFull } from '@/interfaces'
import i18n from './i18n'

const projects: ProjectFull[] = [
	{
		id: 1,
		title: 'Vue.js Drag and Drop',
		text: i18n.global.t('projects.library'),
		links: [
			{ link: 'https://skiff26.github.io/dragdrop', name: 'View Site' },
			{ link: 'https://github.com/skiff26/dragdrop', name: 'Github'}
		]
	}, 
	{
		id: 2,
		title: 'Minesweeper',
		text: i18n.global.t('projects.minesweeper'),
		links: [
			{ link: 'https://skiff26.github.io/minesweeper', name: 'View Site' },
			{ link: 'https://github.com/skiff26/minesweeper', name: 'Github'}
		]
	}, 
	{
		id: 3,
		title: 'Timefrom',
		text: i18n.global.t('projects.timefrom'),
		links: [
			{ link: 'https://artemkulczycki.github.io/timefrom/', name: 'View Site' },
			{ link: 'https://github.com/artemkulczycki/timefrom', name: 'Github'}
		]
	}, 
]

export default projects