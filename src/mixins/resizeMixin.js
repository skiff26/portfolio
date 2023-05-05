export default {
	data() {
		return { 
			isSmall: false,
		}
	},
	methods: {
		onResize(){
			if(window.innerWidth < 768){
				this.isSmall = true
			} else {
				this.isSmall = false
			}
		}
	},
	mounted() {
		this.onResize()
		addEventListener('resize', this.onResize)
	},
}