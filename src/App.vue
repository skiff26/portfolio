<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Borders from '@/components/Borders.vue'
</script>

<template>
	<div class="container">
		<div class="wrapper">
			<Borders pos="lt" />
			<Header />
			<RouterView />
			<Footer />
			<Borders pos="rb" />
		</div>
	</div>
</template>