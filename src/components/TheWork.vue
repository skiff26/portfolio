<template>
	<div class="work">
		<section class="work__left">
			<h2 class="work__second-title">{{ infoText }}</h2>
			<div class="work__block-year-type">
				<time class="work__left-year">{{ post.year }}</time>
				<span class="work__left-type">{{ post.theme }}</span>
			</div>
			<div class="work__left-text">{{ post.text }}<p v-if="post.fullText" v-html="post.fullText"></p></div>
			<p v-show="post.info" class="work__left-info" v-html="post.info"></p>
		</section>
		<section class="work__center">
			<h1 class="work__title" v-html="post.title"></h1>
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
		</section>
		<section class="work__right">
			<h2 class="work__second-title">{{ technologyText }}</h2>
			<ul class="work__technologies">
				<li class="work__technology" v-for="technology in technologies" :style="{backgroundColor: '#' + technology.bgColor, boxShadow: '0px 0px 20px 5px #' + technology.bgColor }" :key="technology">{{ technology.technology }}</li>
			</ul>
		</section>
	</div>
</template>
<script>
import worksEn from '../works-en'
import works from '../works'
import BaseIcon from '../components/BaseIcon.vue'
import { useStore } from 'vuex'
import { reactive, computed } from 'vue'
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
			const store = useStore()	

			let postsRu =  works.posts 
			let otherPostsRu = works.otherPosts
			let postsEn =  worksEn.posts 
			let otherPostsEn = worksEn.otherPosts
			const postId = useRoute().params.id
			const LANGUAGE = JSON.parse(localStorage.getItem('eng'))
			const posts_EN = [...postsEn, ...otherPostsEn]
			const posts_RU = [...postsRu, ...otherPostsRu]	


			const postById = computed(() => {
				return LANGUAGE ? posts_EN[postId] : posts_RU[postId] 
			})

			const post = postById.value
			const photos = [...post.photos]
			const technologies = [...post.technologies]
			const bgColors = ['FFFF0099', 'FF990099', 'FFC0CB99', 'FFE4C499', 'FFF8DC99', 'DAA52099', 'FFA50099', 'FF450099', 'FF8C0099', 'FF634799', '8B000099', 'A0522D99', '2F4F4F99', '70809099', '0000FF99', '00FF7F99', '32CD3299', 'FF149399', 'FF69B499', 'FF00FF99', 'FF149399', 'FF6EB499', 'FF8C0099'];
			
			const infoText = computed(() => {
				return store.getters.eng ? 'Project information' : 'Информация о проекте'
			})

			const technologyText = computed(() => {
				return store.getters.eng ? 'Technologies' : 'Технологии'
			})

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
				infoText,
				technologies,
				technologyText,
				modules: [Pagination, EffectCards]
			}

		}
}
</script>