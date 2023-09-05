export interface Link {
	name: string,
	link: string
}

export interface Project {
	name: string,
	id: number
}

export interface ProjectFull {
	id: number,
	title: string,
	text: string,
	links: Link[]
}

export interface Gradient {
	grad1: string,
	grad2: string
}