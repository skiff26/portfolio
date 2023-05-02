<template>
	<header class="header animate__animated animate__fadeIn" :class="{'transparent': transparent}">
		<div class="header__container">
			<nav class="header__nav nav">
				<ul class="nav__items">
					<LanguageSelect class="nav__lang" v-if="!transparent" :options="options" :selected="selectedGet" @select="optionSelect"/>
					<li class="nav__item" :class="{'transparent': transparent}" v-for="item in items" :key="item.label">
						<router-link :to="item.link" class="nav__link">{{ item.label }}</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<script>
import { mapGetters } from 'vuex';
import BaseIcon from './BaseIcon.vue';
import LanguageSelect from './LanguageSelect.vue';
export default {
    props: ["transparent"],
	 components: { BaseIcon, LanguageSelect },
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
            ],
				selected: 'Язык',
				options: [
					{name: 'English', value: 1},
					{name: 'Русский', value: 2},
				],
        };
    },
    methods: {
		  optionSelect(option){
				this.selected = option.name
				this.city = option.name
			},	
    },
	 computed: {
		selectedGet(){
			return this.$store.getters.eng ? "English" : "Русский"
		}
	 },
	 mounted(){
		this.$store.dispatch('setSaveLanguage')
	 }
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