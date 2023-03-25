<template>
	<div class="wrapper">
		<TheHeader v-if="!isSmall" :transparent="transparent"/>
		<TheHeaderMobile v-else :transparent="transparent"/>
		<main class="page">
			<div class="works">
				<h2 class="works__title">My works</h2>
				<div class="works__content"> 
					<ul class="works__cards">
						<li class="works__card card" @click="$router.push(`/work/${work.id}`)" v-for="(work) in works" :key="work">
							<h4 class="card__title">{{ work.title }}</h4>
							<div class="card__img"><img :src="`/posts/${work.path}/cover.png`" alt=""></div>
							<div class="card__info">
								<p class="card__theme">{{ work.theme }}</p>
								<p class="card__year">{{ work.year }}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</main>
		<TheFooter :transparent="transparent"/>
	</div>
</template>

<style scoped lang="scss">
.page {
	scroll-behavior: smooth;
	background: rgb(255,255,255);
	background: linear-gradient(180deg, rgba(255,255,255,0.8995973389355743) 0%, rgba(240,246,251,0.8323704481792717) 35%, rgba(240,246,251,1) 75%, rgba(255,255,255,1) 100%);
}	
</style>

<script>
import works from '../works'
import TheHeader from '../components/TheHeader.vue'
import TheHeaderMobile from '../components/TheHeaderMobile.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
	components: {
		TheHeader, TheFooter, TheHeaderMobile
	},
	data(){
		return {
			isSmall: false,
			transparent: false,
			works: [...works.posts, ...works.otherPosts]
		}
	},
	methods: {
		onResize(){
			if(window.innerWidth < 768){
				this.isSmall = true
			} else {
				this.isSmall = false
			}
		}
	},
	mounted(){
		this.onResize()
		addEventListener('resize', this.onResize)

	}
}
</script>