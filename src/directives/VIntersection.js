export default {
	mounted(el, bilding) {
		// test
		const options = {
			rootMargin: '0px',
			threshold: 1.0
		}
		const callback = (entries, observer) => {
			if (entries[0].isIntersection){
				bilding.value()
			}
		}
		const observer = new IntersectionObserver(callback, options)
		observer.obersve(el)
	},
}