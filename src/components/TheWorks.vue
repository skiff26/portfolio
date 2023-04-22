<template>
	<section id="works" class="main__featured featured">
		<div class="featured__container">
			<h2 class="featured__featured">Featured works</h2>
			<div class="featured__body">
				<transition-group name="works-list">
				<article class="featured__block block-featured" v-for="post in sortedPosts" :key="post.title">
					<div class="block-featured_image"><a @click="$router.push(`/work/${post.id}`)"><img :src="`./posts/${post.path}/cover.png`" :alt="post.alt"></a></div>
					<div class="block-featured__content">
						<h3 class="block-featured__title"><a @click="$router.push(`/work/${post.id}`)" v-html="post.title"></a></h3>
						<div class="block-featured__info">
							<time class="block-featured__years" @click="sortByYear">{{ post.year }}</time>
							<strong class="block-featured__type" @click="sortByTheme">{{ post.theme }}</strong>
							<div class="block-featured__star" v-show="post.star">Best work</div>
						</div>
						<p class="block-featured__text">{{ post.text }}</p>
					</div>
				</article>
			</transition-group>
			</div>
			<button v-if="!isShownMore" class="featured__more" @click="addPosts">Show all</button>
			<button v-else class="featured__more" @click="hidePosts">Show less</button>
		</div>
	</section>								
</template>
<script>
import { mapGetters } from 'vuex'
import works from '../works'
import worksEn from '../works-en'
export default {
	data () {
		return {
			isShownMore: false,
			sorted: false,
			sortedByTheme: false,
			posts: [],
			otherPosts: [],
			totalWorks: [...works.posts, ...works.otherPosts].length
		}
	},
	methods: {
		addPosts(){
			this.isShownMore = !this.isShownMore
			this.posts = [...this.posts, ...this.otherPosts]
		},
		hidePosts(){
			this.isShownMore = !this.isShownMore
			this.posts.splice(this.posts.length - this.otherPosts.length, this.otherPosts.length)
		},
		sortByYear() {
			this.sorted = !this.sorted
    		if(this.sorted){
				if (!this.isShownMore) { this.addPosts() }
				 this.posts.sort((a, b) => b.year - a.year);
			} else {
				this.posts.sort((a, b) => a.year - b.year);
			}
   	},
		sortByTheme(){
			this.sorted = !this.sorted
    		if(this.sorted){
				if (!this.isShownMore) { this.addPosts() }
				this.posts.sort((a, b) => b.theme.localeCompare(a.theme));
			} else {
				this.posts.sort((a, b) => a.theme.localeCompare(b.theme));
			}
		},
		setLanguage(){
			this.$store.dispatch('setSaveLanguage');
			const store = this.$store.getters.eng;
			this.posts = store ? worksEn.posts : works.posts;
			this.otherPosts = store ? worksEn.otherPosts : works.otherPosts;
		}
	},
	watch: {
		eng(){
			this.setLanguage()
		}
	},
	computed: {
		sortedPosts(){
			return [...this.posts];
		},
		...mapGetters(['eng'])
	},
	mounted(){
		this.setLanguage()
	}
}
</script>
<style scoped>
.works-list-enter-active,
.works-list-leave-active {
  transition: all 0.5s ease;
}
.works-list-enter-from,
.works-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>