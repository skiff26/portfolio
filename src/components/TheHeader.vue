<template>
	<header class="header" :class="{'transparent': transparent}">
		<div class="header__container">
			<nav class="header__nav nav">
				<ul class="nav__items">
					<button class="nav__lang" @click="$store.commit('toggleSettings')"><BaseIcon name="language" wh="25" :color="transparent ? 'white' : 'black'"/></button>
					<li class="nav__item" :class="{'transparent': transparent}" v-for="item in items" :key="item.label">
						<a :href="item.link" @click.prevent="$router.push(item.link)" class="nav__link">{{ item.label }}</a>
					</li>
				</ul>
			</nav>
		</div>
		<teleport to='body'>
			<transition>
				<SettingsDialog v-if="settingsStatus" />
			</transition>
		</teleport>
	</header>
</template>
<script>
import BaseIcon from './BaseIcon.vue';
import SettingsDialog from './SettingsDialog.vue';
import { mapGetters } from 'vuex'

export default {
    props: ["transparent"],
	 components: { BaseIcon, SettingsDialog },
	 computed: {
		...mapGetters(['settingsStatus'])
	},
    data() {
        return {
            items: [
                {
                    label: "About Me",
                    link: "/",
                    rout: true
                },
                {
                    label: "Works",
                    link: "/works",
                    rout: false
                },
                {
                    label: "Contact",
                    link: "/contact",
                    rout: true
                }
            ]
        };
    },
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: "smooth" });
        }
    },
}
</script>
<style scoped lang="scss">
.header.transparent {
	 position: fixed;
	 background: #201f1f9d;
	 width: 100vw;
	 z-index: 150;
	 &__burger{
		 fill: rgb(238, 228, 228);
	}
}
.nav__item.transparent{
		 a {
			 color: rgb(247, 244, 244);
			 position: relative;
			 &:after {
				 content: "";
				 position: absolute;
				 bottom: 0px;
				 left: 0;
				 width: 0;
				 height: 3px;
				 border-radius: 2px;
				 transition: width 0.3s ease 0s;
				 transition: all 0.3s ease 0s;
				 background-color: #fefdff9f;
			  }
			  &:hover::after{
				 opacity: 1;
				 width: 100%;
			  }	
		 }
	 }
</style>