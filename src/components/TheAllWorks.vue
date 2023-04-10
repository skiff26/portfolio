<template>
	<main class="page">
		<div class="works">
			<h2 class="works__title">My works</h2>
			<select name="filter" class="works__filter" v-model="selectedSort" id="filter" @change="changeOptions">
				<option disabled value="">Выберите из списка</option>
				<option v-for="option in options" :key="option.value" :value="option.value">
				{{ option.name }}
				</option>
			</select>
			<div class="works__content"> 
				<ul class="works__cards">
					<li class="works__card card" @click="$router.push(`/work/${work.id}`)" v-for="(work) in works" :key="work">
						<h4 class="card__title" v-html="work.title"></h4>
						<h5 class="card__star" v-show="work.star">BEST</h5>
						<div class="card__img"><img :src="`./posts/${work.path}/cover.png`" loading="lazy" :alt="work.alt"></div>
						<div class="card__info">
							<p class="card__theme">{{ work.theme }}</p>
							<p class="card__year">{{ work.year }}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
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
export default {
	data(){
		return {
			works: [...works.posts, ...works.otherPosts],
			options: [
				{value: 'web', name: 'Web programming'},
				{value: 'html', name: 'HTML codding'},
				{value: 'all', name: 'Show all works'},
			],
			selectedSort: ''
		}
	},
	watch: {
		selectedSort(newValue){
			this.works = [...works.posts, ...works.otherPosts]
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
		}
	},
	mounted(){
		this.selectedSort = "web"
	}
}
</script>