<template>
	<div class="post">
		<BaseOverlayDialog @click="$emit('close')" />
		<div class="post__container">
			<a class="post__exit" @click="$emit('close')"><BaseIcon name="exit" color="white"/></a>
			<h4 class="post__title" v-html="post.title"></h4>
			<div class="post__category">{{ post.category }}</div>
			<div class="post__content" v-html="post.content"></div>
			<div class="post__date">{{ post.date }}</div>
		</div>
	</div>
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import BaseOverlayDialog from './BaseOverlayDialog.vue'

export default {
	components: { BaseIcon, BaseOverlayDialog },
	props: ['post'],
}
</script>