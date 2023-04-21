<template>
	<header class="header" :class="{'transparent': transparent}">
		<div class="header__container" :class="{'transparent': transparent}">
			<button class="nav__lang" @click="$store.commit('toggleSettings')"><BaseIcon name="language" wh="30" :color="transparent ? 'white' : 'black'"/></button>
			<transition>
			<BaseIcon v-if="!isOpen" @click="isOpen = true" class="header__burger" :class="{'transparent': transparent}" name="list" wh="40"/>
				<div v-else class="header__burger burger">
					<div class="burger__header">
						<h2 class="burger__title">Navigation</h2>
						<BaseIcon @click="isOpen = false" class="burger__close" name="exit" wh="35"/>
					</div>
					<nav class="burger__content">
						<ul class="burger__list">
							<li v-for="item in items" :key="item.label" class="burger__item"><a :href="item.link" @click.prevent="$router.push(item.link)">{{ item.label }}</a></li>
						</ul>
					</nav>
				</div>
			</transition>
		</div>
		<teleport to='body'>
			<transition>
				<SettingsDialog v-if="settingsStatus" />
			</transition>
		</teleport>
	</header>
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import SettingsDialog from './SettingsDialog.vue'
import { mapGetters } from 'vuex'
export default {
	props: ['transparent'],
	components: {
		BaseIcon, SettingsDialog
	},
	computed: {
		...mapGetters(['settingsStatus'])
	},
	data () {
		return {
			isOpen: false,
			items: [
				{
					label: 'About Me',
					link: '/'
				},
				{	
					label: 'Works',
					link: '/works'
				},
				{
					label: 'Contact',
					link: '/contact'
				}
			]
		}
	}
}
</script>
<style scoped lang="scss">
@media (max-width: 768px){
	.header.transparent {
		position: fixed;
		z-index: 30;
	}
	.header__container.transparent{
			width: 100vw;
			height: 60px;
			display: flex;
			align-items: center;
			justify-content: end;
		}
		.header__burger.transparent{
			fill: white;
		}
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>