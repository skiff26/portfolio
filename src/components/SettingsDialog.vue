<template>
	<article class="settings">
		<BaseOverlayDialog @click="$store.commit('toggleSettings')" />
		<div class="settings__cont">
			<button class="settings__exit" @click="$store.commit('toggleSettings')"><BaseIcon name="exit" wh="30" color="white"/></button>
			<h3 class="settings__title">{{ text }}</h3>
			<div class="settings__btns">
			<button @click="toEnglish" :disabled="active">English</button>
			<button @click="toRussian" :disabled="!active">Русский</button>
			</div>
		</div>
	</article>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue';
import BaseOverlayDialog from './BaseOverlayDialog.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const text = computed(() => {
	return store.getters.eng 
		? 'Choose language'
		: "Выберите язык"
})
const active = computed(() => {
	return store.getters.eng
})

const reload = () => {
	if (location.hash !== "#/" && location.hash !== "#/contact") {
		location.reload()
	}
}

const toEnglish = () => {
	store.commit('setLang', true)
	reload()
}
const toRussian = () => {
	store.commit('setLang', false)
	reload()
}
</script>