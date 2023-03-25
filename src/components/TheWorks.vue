<template>
	<div id="works" class="main__featured featured">
		<div class="featured__container">
			<div class="featured__featured">Featured works</div>
			<div class="featured__body">
				<transition-group name="works-list">
				<div class="featured__block block-featured" v-for="post in sortedPosts" :key="post.title">
					<div class="block-featured_image"><a @click="$router.push(`/work/${post.id}`)"><img :src="`./posts/${post.path}/cover.png`" :alt="post.alt"></a></div>
					<div class="block-featured__content">
						<div class="block-featured__title"><a @click="$router.push(`/work/${post.id}`)">{{ post.title }}</a></div>
						<div class="block-featured__info">
							<div class="block-featured__years" @click="sortByYear">{{ post.year }}</div>
							<div class="block-featured__type" @click="sortByTheme">{{ post.theme }}</div>
						</div>
						<div class="block-featured__text">{{ post.text }}</div>
					</div>
				</div>
			</transition-group>
			</div>
			<button v-if="!isShownMore" class="featured__more" @click="addPosts">Show all</button>
			<button v-else class="featured__more" @click="hidePosts">Show less</button>
		</div>
	</div>								
</template>
<script>
import works from '../works'
export default {
	data () {
		return {
			isShownMore: false,
			sorted: false,
			posts: works.posts,
			otherPosts: works.otherPosts
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
		}
	},
	computed: {
		sortedPosts(){
			return [...this.posts];
		}
	},
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