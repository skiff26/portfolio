<template>
	<div class="main__posts posts">
		<div class="posts__container">
			<div class="posts__body">
				<div class="posts__topblock">
					<div class="posts__recent">Recent posts</div>
					<a class="posts__btn-more" @click="showMore">{{ btnText }}</a>
				</div>
				<div class="posts__content">
					<transition-group name="works-list">
						<div class="posts__item post-block" v-for="post in posts" :key="post.id">
							<h3 class="post-block__title" @click="openDialog(post)"><a @click.prevent href="#">{{ post.title }}</a></h3>
							<div class="post-block__info">
								<div class="post-block__date">{{ post.date }}</div>
								<div class="post-block__post">{{ post.category }}</div>
							</div>
							<div class="post-block__text">{{ post.text }}</div>
						</div>
					</transition-group>
				</div>
			</div>
		</div>
	</div>
	<teleport to='body'>
		<transition>
			<PostDialog v-if="post.text" :post="post" @close="closeDialog"/>
		</transition>
	</teleport>
</template>
<script>
import posts from '../posts'
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
	methods: {
		showMore(){
			this.btnMore = !this.btnMore
			if(this.btnMore){
				this.btnText = 'View less'
				this.posts = [...this.posts, ...posts.posts.slice(2)]
			} else {
				this.btnText = 'View all'
				this.posts = posts.posts.slice(0, 2)
			}
		},
		openDialog(post){
			this.post = post
			document.body.classList.add('lock');
		},
		closeDialog(){
			this.post = {}
			document.body.classList.remove('lock');
		}
	},
	mounted(){
		this.posts = posts.posts.slice(0, 2)
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
}</style>