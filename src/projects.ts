import type { ProjectFull } from '@/interfaces'

const projects: ProjectFull[] = [
	{
		id: 1,
		title: 'Vue.js Drag and Drop',
		text: 'This is a library of pre-built drag-and-drop components for Vue.js. The primary objective is to facilitate the seamless integration of the library\'s components into a user\'s project without requiring any additional dependencies. These components are constructed using Vue 3 and the Composition API.',
		links: [
			{ link: 'https://skiff26.github.io/dragdrop', name: 'View Site' },
			{ link: 'https://github.com/skiff26/dragdrop', name: 'Github'}
		]
	}, 
	{
		id: 2,
		title: 'Minesweeper',
		text: 'Brower Minesweeper is an engaging game with a beautiful design and sound effects. In it, you\'ll find the classic puzzle where your task is to uncover cells while avoiding mines and solving logical puzzles. This game was created with Vue 3 (Options API) and SCSS.',
		links: [
			{ link: 'https://github.com/skiff26/minesweeper', name: 'View Site' },
			{ link: 'https://skiff26.github.io/minesweeper', name: 'Github'}
		]
	}, 
	{
		id: 3,
		title: 'Timefrom',
		text: 'This is a web application for supporting Complaint-Reviewing administrators for RAGMIR GAMES. With this application, administrators can check how much time has passed since a specific date. It operates in the Moscow time zone and was built using Vue 3 and PrimeVue.',
		links: [
			{ link: 'https://artemkulczycki.github.io/timefrom/', name: 'View Site' },
			{ link: 'https://github.com/artemkulczycki/timefrom', name: 'Github'}
		]
	}, 
]

export default projects