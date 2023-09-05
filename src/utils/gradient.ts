import type { Gradient } from '@/interfaces'

const gradients: Gradient[] = [
	{ grad1: 'rgb(117,85,125)', grad2: 'rgb(113,189,55)' },
	{ grad1: 'rgb(155,96,147)', grad2: 'rgb(204,178,61)' }, 
	{ grad1: 'rgb(92,104,159)', grad2: 'rgb(186,220,53)' }, 
	{ grad1: 'rgb(131,96,220)', grad2: 'rgb(209,156,75)' },
	{ grad1: 'rgb(98,117,179)', grad2: 'rgb(150,121,87)' },
	{ grad1: 'rgb(50,113,138)', grad2: 'rgb(197,123,107)' },
	{ grad1: 'rgb(114,55,182)', grad2: 'rgb(106,210,64)' }, 
	{ grad1: 'rgb(95,92,191)', grad2: 'rgb(180,180,74)' }
]

export const setGradientVariables = () => {
	const index: number = Math.floor(Math.random() * gradients.length)
	const gradient: Gradient = gradients[index]

	document.documentElement.style.setProperty('--grad-1', gradient.grad1);
	document.documentElement.style.setProperty('--grad-2', gradient.grad2);
}