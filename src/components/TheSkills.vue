<template>
	<div class="aboutme__image">
		<div class="aboutme__skills skills">
			<transition-group appear tag="ul" class="skills__list">
				<li class="skills__item animate__animated animate__fadeIn" v-for="skill in skills" :key="skill.id">
					<BaseTooltip style="text-transform:uppercase;" :tooltip="skill.name">
						<img :src="`./skills/${skill.name}.svg`" :alt="skill.name">
					</BaseTooltip>
				</li>
			</transition-group>
		</div>
	</div>
</template>

<script setup>
import BaseTooltip from './BaseTooltip.vue';
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
			id: 6,
			name: 'vue'
		},
		{
			id: 7,
			name: 'nuxt'
		},
		{
			id: 8,
			name: 'vuex'
		},
		{
			id: 9,
			name: 'pinia'
		},
		{
			id: 10,
			name: 'git'
		},
	]
</script>