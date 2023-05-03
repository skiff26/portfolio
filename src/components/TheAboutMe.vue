<template>
	<section class="main__aboutme aboutme" id="aboutme">
		<div class="aboutme__container">
			<div class="aboutme__body">
				<div class="aboutme__content">
					<h1 class="aboutme__title animate__animated animate__fadeInDown">Hi, I am Artem, Web Programmer</h1>
					<p class="aboutme__text animate__animated animate__fadeInLeft">{{ text }}</p>
					<a href="https://t.me/id00909" target="_blank" class="aboutme__btn animate__animated animate__headShake">{{ contact }}</a>
				</div>
				<TheSkills />
			</div>
		</div>
	</section>
</template>

<script setup>
import TheSkills from './TheSkills.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();

const text = computed(() => {
	return store.getters.eng
		? 'I am a frontend developer with experience in developing web applications, web games, and websites. I am constantly improving my knowledge in this field and learning new technologies. Currently, I know and use the following stack 👉'
		: 'Я фронтенд разработчик с опытом разработки web-приложений, web-игр и сайтов. Я постоянно совершенствую свои знания в данной области, а так же изучаю новые технологии. На данный момент я знаю и использую такой стек 👉'
})
const contact = computed(() => {
	return store.getters.eng 
		? 'Contact with me'
		: 'Связаться со мной'
})
</script>