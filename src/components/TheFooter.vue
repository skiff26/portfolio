<template>
	<footer class="footer wow animate__animated animate__fadeIn" :class="{'transparent': transparent}">
		<div class="footer__container">
			<div class="footer__media media ">
				<ul class="media__list">
					<li class="media__item" :class="{'transparent': transparent}" v-for="item in media" :key="item.alt">
						<a :href="item.link">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16" v-html="item.path"></svg>
						</a>
					</li>
				</ul>
			</div>
			<div class="footer__copy" :class="{'transparent' : transparent}">
				Copyright ©{{ year }} All rights reserved 
			</div>
		</div>
	</footer>
</template>
<script>
import icons from '../icons'
export default {
	props: ['transparent'],
	data () {
		return {
			media: [
				{
					alt: 'GitHub',
					link: 'https://github.com/skiff26',
					path: icons['github'],
				},
				{
					alt: 'Mail',
					link: 'mailto:artem.kulchitsky@gmail.com',
					path: icons['mail'],
				},
				{
					alt: 'Portfolio',
					link: 'https://skiff26.github.io/freebieagency/',
					path: icons['website'],
				},
				{
					label: 'Telegram',
					link: 'https://t.me/id00909',
					path: icons['telegram'],
				}
			]
		}
	},
	computed: {
		year () {
			let year = new Date()
			return year.getFullYear()
		}
	}
}
</script>
<style scoped lang="scss">
.footer.transparent {
	 position: absolute;
	 background: #201f1f9d;
	 bottom: 0;
	 width: 100vw;
	 z-index: 20;
 }
 .footer__copy.transparent{
	color: white;
 }
.media__item.transparent{
		 a {
			 svg {
				 fill: white;
				 opacity: 0.8;
				 transition: all 0.3s ease 0s;
				 &:hover{
					 fill: white;
					 opacity: 1;
				 }
			 }
		 }
	 }
</style>