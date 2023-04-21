import { createStore } from 'vuex';

export default createStore ({
	state: {
		isSettingsOpen: false,
		english: false,
	},
	getters: {
		settingsStatus(state){
			return state.isSettingsOpen
		},
		eng(state){
			return state.english
		}
	},
	mutations: {
		toggleSettings(state){
			state.isSettingsOpen = !state.isSettingsOpen;
		},
		setLang(state, lang, reload){
			localStorage.setItem('eng', lang)
			state.english = lang
			state.isSettingsOpen = false
			if (reload) {
				location.reload()
			}
		}
	},
	actions: {
		setSaveLanguage({ commit }){
			const isEnlgish = JSON.parse(localStorage.getItem('eng'))
			if (isEnlgish !== null){
				commit('setLang', isEnlgish)
			}
		}
	}
})