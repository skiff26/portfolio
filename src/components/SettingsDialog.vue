<template>
	<article class="settings">
		<BaseOverlayDialog @click="$store.commit('toggleSettings')" />
		<div class="settings__cont">
			<button class="settings__exit" @click="$store.commit('toggleSettings')"><BaseIcon name="exit" wh="30" color="white"/></button>
			<h3 class="settings__title">Выбор языка</h3>
			<div class="settings__btns">
			<button class="settings__eng">English</button>
			<button class="settings__ru">Русский</button>
			</div>
		</div>
	</article>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue';
import BaseOverlayDialog from './BaseOverlayDialog.vue'
</script>