<template>
	<main class="page">
		<section class="works">
			<h1 class="works__title">My works</h1>
			<select name="filter" class="works__filter" v-model="selectedSort" id="filter" @change="changeOptions">
				<option disabled value="">Выберите из списка</option>
				<option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
			</select>
			<div class="works__content"> 
				<ul class="works__cards">
					<router-link :to="{ name: 'work', params: { id: work.id }, } " v-for="work in works" :key="work">
					<li class="works__card card">
							<h2 class="card__title" v-html="work.title"></h2>
							<h3 class="card__star" v-show="work.star">BEST</h3>
							<div class="card__img"><img :src="`./posts/${work.path}/cover.png`" loading="lazy" :alt="work.alt"></div>
							<div class="card__info">
								<strong class="card__theme">{{ work.theme }}</strong>
								<time class="card__year">{{ work.year }}</time>
							</div>
						</li>
					</router-link>
				</ul>
			</div>
		</section>
	</main>
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
import worksEn from '../works-en'
export default {
	data(){
		return {
			works: [...works.posts, ...works.otherPosts],
			worksEn: [...worksEn.posts, ...worksEn.otherPosts],
			options: [
				{value: 'web', name: 'Web programming'},
				{value: 'html', name: 'HTML codding'},
				{value: 'all', name: 'Show all works'},
			],
			selectedSort: '',
		}
	},
	watch: {
		selectedSort(newValue){
			if (this.$store.getters.eng) {
				this.works = [...worksEn.posts, ...worksEn.otherPosts]
			} else {
				this.works = [...works.posts, ...works.otherPosts]
			}
			let result = []
			if (newValue === 'web'){
				result = this.works.filter((work) => work.theme === 'Web programming')
				this.works = result
			} else if (newValue === 'html') {
				result = this.works.filter((work) => work.theme === 'HTML codding')
				this.works = result
			} else {
				return result
			}
		},
	},
	mounted(){
		this.$store.dispatch('setSaveLanguage')
		this.selectedSort = "web"
	}
}
</script>