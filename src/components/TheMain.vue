<template>
	<main class="main">
		<TheAboutMe />
		<ThePosts />
		<TheWorks />
	</main>
</template>
<script>
import TheAboutMe from './TheAboutMe.vue'
import ThePosts from './ThePosts.vue'
import TheWorks from './TheWorks.vue'
export default {
	components: { 
		TheAboutMe, ThePosts, TheWorks
	 }
}
</script>