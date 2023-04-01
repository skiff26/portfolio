<template>
	<div class="main__aboutme aboutme" id="aboutme">
		<div class="aboutme__container">
			<div class="aboutme__body">
				<div class="aboutme__content">
					<div class="aboutme__title">Hi, I am Artem, Web Programmer</div>
					<div class="aboutme__text">Как веб-программист, я увлечен изучением и развитием своих навыков в веб-разработке. Я прошел различные бессплатные курсы с ютуба и личные проекты, которые позволили мне получить опыт в следующих областях:</div>
					<a href="/aboutme.tx" download="" class="aboutme__btn">Download Resume</a>
				</div>
				<div class="aboutme__image">
					<!-- <img src="/img/person.png" alt="Author"> -->
					<div class="aboutme__skills skills">
						<ul class="skills__list">
							<li class="skills__item" v-for="skill in skills" :key="skill.id">
								<BaseTooltip style="text-transform:uppercase;" :tooltip="skill.name"><img :src="`./skills/${skill.name}.svg`" :alt="skill.name"></BaseTooltip>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import BaseTooltip from '../components/BaseTooltip.vue'
export default {
	components: {
		BaseTooltip
	},
	setup (){
		const skills = [
			{
				id: 0,
				name: 'html'
			},
			{
				id: 1,
				name: 'css'
			},
			{
				id: 2,
				name: 'sass'
			},
			{
				id: 3,
				name: 'bem'
			},
			{
				id: 4,
				name: 'js'
			},
			{
				id: 5,
				name: 'bootstrap'
			},
			{
				id: 6,
				name: 'tailwind'
			},
			{
				id: 7,
				name: 'vue'
			},
			{
				id: 8,
				name: 'git'
			},
		]

		return {
			skills
		}
	}
}
</script>