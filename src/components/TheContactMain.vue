<template>
	<main class="contact">
		<div class="contact__content">
			<h1 class="contact__title">Связаться со мной</h1>
			<div class="contact__main">
				<input v-model="email" type="email" @keydown.esc="email = ''" @keydown.enter="submitEmail(email)" placeholder="Введите email">
				<button v-if="!email" class="empty" disabled>Введите email</button>
				<button v-else @click="submitEmail(email)">Отправить</button>
				<div v-show="success" class="contact__success">
					<BaseTooltip :tooltip="'Письмо не отправляется.'">
						<BaseIcon name="info" wh="30" class="contact__info" color="#ffffffd2"/>
					</BaseTooltip>
					{{ success }}
				</div>
				<div v-show="error" class="contact__error">{{ error }}</div>
			</div>
		</div>
	</main>
</template>

<style scoped lang="scss">
</style>

<script>
import BaseIcon from './BaseIcon.vue'
import BaseTooltip from './BaseTooltip.vue'
export default {
	components: { BaseIcon, BaseTooltip },
	data () {
		return {
			email: '',
			success: '',
			error: ''
		}
	},
	methods: {
		submitEmail(email){
			const RegEmail = /[^\s@]+@[^\s@]+\.[^\s@]+/gi
			if (email.match(RegEmail)) {
				this.error = ''
				this.success = `На email ${this.email} будет отправлено письмо.
				Вы всегда можете написать вне очереди по ссылками внизу страницы.`
			} else {
				this.success = ''
				this.error = `Некорректный email (${this.email}).`
			}
			this.email = ''
		},
	}
}
</script>