<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Borders from '@/components/Borders.vue'
import { setGradientVariables } from '@/utils/gradient'
setGradientVariables()
</script>

<template>
	<div class="container">
		<h1>Artem Kulchytskyi - Frontend Engineer</h1>
		<div class="wrapper">
			<Borders pos="lt" />
			<Header />
			<RouterView v-slot="{ Component }">
				<transition name="fade" mode="out-in" appear>
					<component :is="Component" />
				</transition>
			</RouterView>
			<Footer />
			<Borders pos="rb" />
		</div>
	</div>
</template>