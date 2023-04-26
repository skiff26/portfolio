<template>
	<div class="aboutme__image">
		<div class="aboutme__skills skills">
			<transition-group appear tag="ul" class="skills__list">
				<li class="skills__item" v-for="skill in skills" :key="skill.id">
					<BaseTooltip style="text-transform:uppercase;" :tooltip="skill.name">
					<img :src="`./skills/${skill.name}.svg`" :alt="skill.name"></BaseTooltip>
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

<style lang="scss" scoped>
.skills__item {
  transition: all 0.3s ease;
}

.skills__item.v-enter,
.skills__item.v-leave-to {
  opacity: 1;
  transform: scale(0);
}

.skills__item.v-enter-active,
.skills__item.v-leave-active {
  opacity: 1;
  transform: scale(0);
}
</style>