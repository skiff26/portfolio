import type { Gradient } from '@/interfaces'

const gradients: Gradient[] = [
	{ grad1: 'rgb(117,85,125)', grad2: 'rgb(113,189,55)' },
	{ grad1: 'rgb(155,96,147)', grad2: 'rgb(204,178,61)' }, 
	{ grad1: 'rgb(92,104,159)', grad2: 'rgb(186,220,53)' }, 
	{ grad1: 'rgb(131,96,220)', grad2: 'rgb(209,156,75)' },
	{ grad1: 'rgb(98,117,179)', grad2: 'rgb(150,121,87)' },
	{ grad1: 'rgb(50,113,138)', grad2: 'rgb(197,123,107)' },
	{ grad1: 'rgb(114,55,182)', grad2: 'rgb(106,210,64)' },
	{ grad1: 'rgb(95,92,191)', grad2: 'rgb(180,180,74)' },
	{ grad1: 'rgb(84,97,182)', grad2: 'rgb(208,120,69)' },
	{ grad1: 'rgb(179,114,204)', grad2: 'rgb(189,204,71)' },
	{ grad1: 'rgb(156,85,187)', grad2: 'rgb(86,139,108)' },
	{ grad1: 'rgb(58,105,122)', grad2: 'rgb(67,213,114)' },
	{ grad1: 'rgb(122,104,203)', grad2: 'rgb(110,176,60)' },
	{ grad1: 'rgb(146,101,166)', grad2: 'rgb(152,147,51)' },
	{ grad1: 'rgb(219,75,164)', grad2: 'rgb(85,189,98)' },
]

let current: number = Math.floor(Math.random() * gradients.length)

export const setGradientVariables = () => {
	let index: number
	
	do {
		index = Math.floor(Math.random() * gradients.length)
	} while (current === index)

	current = index

	const gradient: Gradient = gradients[index]

	document.documentElement.style.setProperty('--grad-1', gradient.grad1)
	document.documentElement.style.setProperty('--grad-2', gradient.grad2)
}