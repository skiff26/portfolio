<template>
	<section class="main__posts posts">
		<div class="posts__container">
			<div class="posts__body">
				<div class="posts__topblock">
					<h2 class="posts__recent">Recent posts</h2>
					<a class="posts__btn-more" @click="showMore">{{ btnText }}</a>
				</div>
				<div class="posts__content">
					<transition-group name="works-list">
						<article class="posts__item post-block" v-for="post in postsLang" :key="post.id">
							<h3 class="post-block__title" @click="openDialog(post)"><a @click.prevent href="#">{{ post.title }}</a></h3>
							<div class="post-block__info">
								<time class="post-block__date">{{ post.date }}</time>
								<p class="post-block__post">{{ post.category }}</p>
							</div>
							<p class="post-block__text">{{ post.text }}</p>
						</article>
					</transition-group>
				</div>
			</div>
		</div>
	</section>
	<teleport to='body'>
		<transition>
			<PostDialog v-if="post.text" :post="post" @close="closeDialog"/>
		</transition>
	</teleport>
</template>
<script>
import posts from '../posts'
import postsEn from '../posts-en'
import PostDialog from './PostDialog.vue'
export default {
	components: { PostDialog },
	data(){
		return {
			posts: [],
			post: {},
			btnMore: false,
			btnText: 'View all',
		}
	},
	computed: {
		postsLang(){
			if (this.btnMore){
				return this.$store.getters.eng
				? this.posts = postsEn.posts
				: this.posts = posts.posts
			} 
			return this.$store.getters.eng
				? this.posts = postsEn.posts.slice(0, 2)
				: this.posts = posts.posts.slice(0, 2)
		}
	},
	methods: {
		showMore(){
			this.btnMore = !this.btnMore
			if(this.btnMore){
				this.btnText = 'View less'
				this.postsLang()
			} else {
				this.btnText = 'View all'
				this.postsLang()
			}
		},
		openDialog(post){
			this.post = post
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
			
			document.body.style.paddingRight = scrollbarWidth + 'px'
			
			document.body.classList.add('lock')
		},
		closeDialog(){
			this.post = {}
			document.body.style.paddingRight = 0
	
			document.body.classList.remove('lock')
		}
	},
	mounted(){
		if (this.$store.getters.eng){
			this.posts = postsEn.posts.slice(0, 2)
		} else {
			this.posts = posts.posts.slice(0, 2)
		}
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