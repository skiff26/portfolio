<template>
	<section class="main__aboutme aboutme" id="aboutme">
		<div class="aboutme__container">
			<div class="aboutme__body">
				<div class="aboutme__content">
					<h1 class="aboutme__title">Hi, I am Artem, Web Programmer</h1>
					<p class="aboutme__text">{{ text }}</p>
					<!-- <a href="https://github.com/skiff26/portfolio/raw/gh-pages/Artem%20Kulchytskyi%20frontend%20ru.pdf" download class="aboutme__btn">Download Resume</a> -->
					<a href="mailto:artem.kulchitsky@gmail.com" class="aboutme__btn">{{ contact }}</a>
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
		? 'As a web programmer, I am passionate about learning and developing my skills in web development. I have completed a number of online courses and have created my own projects, which has allowed me to gain experience in the following areas:'
		: 'Как веб-программист, я увлечен изучением и развитием своих навыков в веб-разработке. Я прошел ряд онлайн курсов и создавал собственные проекты, что позволило мне приобрести опыт в следующих областях:'
})
const contact = computed(() => {
	return store.getters.eng 
		? 'Contact me'
		: 'Связаться со мной'
})
</script>