<template>
	<div class="work">
		<div class="work__left">
			<h2 class="work__second-title">Краткая информация о проекте</h2>
			<div class="work__block-year-type">
				<h3 class="work__left-year">{{ post.year }}</h3>
				<h3 class="work__left-type">{{ post.theme }}</h3>
			</div>
			<div class="work__left-text">{{ post.text }} <span v-if="post.fullText">{{ post.fullText }}</span></div>
			<div v-show="post.info" class="work__left-info" v-html="post.info"></div>
		</div>
		<div class="work__center">
			<h1 class="work__title">{{ post.title }}</h1>
			<div class="swiper-container">
				<Swiper
				:modules="modules"
				effect="cards"
				:grabCursor="true"
				:loop="true"
				:Cards="{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}"
				:pagination="true"
				>
					<SwiperSlide v-for="photo in photos" :key="photo">
						<img :src="`./posts/${post.path}/${photo}.png`" @load="handleImageLoad" :alt="post.alt"/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="work__links">
			<a class="work__link" target="_blank" :href="post.ghLink">
				<BaseIcon class="work__icon" name="github" wh="100"/>
			</a>
			<a class="work__link" target="_blank" :href="post.link">
				<BaseIcon class="work__icon" name="website" wh="100"/>
			</a>
		</div>
		</div>
		<div class="work__right">
			<h2 class="work__second-title">Технологии</h2>
			<ul class="work__technologies">
				<li class="work__technology" v-for="technology in technologies" :style="{backgroundColor: '#' + technology.bgColor, boxShadow: '0px 0px 20px 5px #' + technology.bgColor }" :key="technology">{{ technology.technology }}</li>
			</ul>
		</div>
	</div>
</template>
<script>
import works from '../works'
import BaseIcon from '../components/BaseIcon.vue'
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router';
import { Pagination, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css"
import 'swiper/css/pagination'
import "swiper/css/effect-cards"

export default {
	components: {
		BaseIcon, Swiper, SwiperSlide
	},
	setup(){
			let posts = works.posts
			const otherPosts = works.otherPosts

			posts = [...posts, ...otherPosts]
			const postId = useRoute().params.id
			const post = posts[postId]
			const photos = [...post.photos]
			const technologies = [...post.technologies]
			const bgColors = ['0b3ca5e3', '271d0be3', '11b2f1e3', '12a125e3', 'ca3522e3', 'a310cfe3', 'df9c1fe3', 'FF000099', 'FFA50099', 'FFFF0099', '00800099', '0000FF99', '80008099']
			
			const state = reactive({
				bgColor: '',
			})

			function generateColors() {
				technologies.forEach(item => {
				item.bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
				});
			}

			generateColors()

			return {
				post,
				state,
				photos,
				technologies,
				modules: [Pagination, EffectCards]
			}

		}
}
</script>