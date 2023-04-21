<template>
	<main class="contact">
		<div class="contact__content">
			<h1 class="contact__title">{{ title }}</h1>
			<div class="contact__main">
				<input v-model="email" type="email" @keydown.esc="email = ''" @keydown.enter="submitEmail(email)" :placeholder="placeholder">
				<button v-if="!email" class="empty" disabled>{{ placeholder }}</button>
				<button v-else @click="submitEmail(email)">{{ send }}</button>
				<div v-show="success" class="contact__success">
					<BaseTooltip :tooltip="tooltipText">
						<BaseIcon name="info" wh="30" class="contact__info" color="#ffffffd2"/>
					</BaseTooltip>
					{{ success }}
				</div>
				<div v-show="error" class="contact__error">{{ error }}</div>
			</div>
		</div>
	</main>
</template>

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
				this.success = 
				this.$store.getters.eng 
				? `An email will be sent to ${this.email}. You can always write out of turn using the links at the bottom of the page.`
				: `На email ${this.email} будет отправлено письмо. Вы всегда можете написать вне очереди по ссылками внизу страницы.`
			} else {
				this.success = ''
				this.error = this.$store.getters.eng ? `Incorrect email (${this.email}).` : `Некорректный email (${this.email}).`
			}
			this.email = ''
		},
	},
	computed: {
		title(){
			return this.$store.getters.eng ? 'Contact with me' : 'Связаться со мной'
		},
		placeholder(){
			return this.$store.getters.eng ? 'Enter your email' : 'Введите email'
		},
		send(){
			return this.$store.getters.eng ? 'Submit' : 'Отправить'
		},
		tooltipText(){
			return this.$store.getters.eng ? 'The letter is not sent.' : 'Письмо не отправляется.'
		}
	}
}
</script>