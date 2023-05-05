<template>
	<article class="post">
		<BaseOverlay :white="true" @click="$emit('close')" />
		<div class="post__container">
			<button class="post__exit" @click="$emit('close')"><BaseIcon name="exit" color="white"/></button>
			<h3 class="post__title" v-html="post.title"></h3>
			<div class="post__category">{{ post.category }}</div>
			<div class="post__content" v-html="post.content"></div>
			<time class="post__date">{{ post.date }}</time>
		</div>
	</article>
</template>
<script>
import BaseIcon from './BaseIcon.vue';
import BaseOverlay from './BaseOverlay.vue';

export default {
	components: { BaseIcon, BaseOverlay },
	props: ['post']
}
</script>