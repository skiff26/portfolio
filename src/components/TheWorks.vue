<template>
	<section id="works" class="main__featured featured">
		<div class="featured__container">
			<h2 class="featured__featured">Featured works</h2>
			<div class="featured__body">
			 <transition-group name="list" appear>
				<article class="featured__block block-featured" v-for="(post, index) in sortedPosts" :key="post.title" :style="{ transitionDelay: `${index * 0.09}s` }">
					<div class="block-featured_image">
						<router-link :to="{ name: 'work', params: { id: post.id } }"><img :src="`./posts/${post.path}/cover.png`" :alt="post.alt"></router-link>
					</div>
					<div class="block-featured__content">
						<h3 class="block-featured__title">
							<router-link :to="{ name: 'work', params: { id: post.id } }" v-html="post.title"></router-link>
						</h3>
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
import works from '../works'
import worksEn from '../works-en'
import { mapGetters } from 'vuex'
export default {
	data () {
		return {
			posts: [],
			otherPosts: [],
			sorted: false,
			isShownMore: false,
			featurs: [0,1,2,8,9,10],
		}
	},
	methods: {
		addPosts(){
			this.isShownMore = !this.isShownMore
			this.posts = [...this.posts, ...this.otherPosts]
			this.sorted = false
		},
		hidePosts(){
			this.isShownMore = !this.isShownMore
			const store = this.$store.getters.eng
			this.posts = store ? worksEn.posts : works.posts
			this.posts.length = 3
			this.sorted = false
		},
		sortByYear() {
			if (!this.isShownMore) { this.addPosts() }
			this.sorted = !this.sorted
    		if(this.sorted){
				this.posts.sort((a, b) => a.year - b.year)
			} else {
				this.posts.sort((a, b) => b.year - a.year)
			}
   	},
		sortByTheme(){
			if (!this.isShownMore) { this.addPosts() }
			this.sorted = !this.sorted
    		if(this.sorted){
				 this.posts.sort((a, b) => a.theme.localeCompare(b.theme))
				} else {
				this.posts.sort((a, b) => b.theme.localeCompare(a.theme))
			}
		},
		setLanguage(){
			this.sorted = false
			this.isShownMore = false
			const store = this.$store.getters.eng
			this.posts = store ? worksEn.posts : works.posts
			this.otherPosts = store ? worksEn.otherPosts : works.otherPosts
		}
	},
	watch: {
		eng(){
			this.setLanguage()
		}
	},
	computed: {
		...mapGetters(['eng']),
		sortedPosts(){
			this.posts = this.posts.filter(post => this.featurs.includes(post.id))
			return [...this.posts];
		}
	},
	mounted(){
		this.setLanguage()
	}
}
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
	transition: all .5s ease 0s;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
</style>