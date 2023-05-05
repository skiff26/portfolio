import { createStore } from 'vuex';
import axios from 'axios';

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
		},
		getIP({ commit }){
			axios.get(`https://ipapi.co/json/`)
				.then ((res) => {
					const english = res.data.country === 'RU' ? false : res.data.country === 'BY' ? false : true
					if (localStorage.getItem('eng') == null){
						commit('setLang', english)
					}
				})
				.catch(error => console.error(error));
		},
		getEnlgishPosts({ commit }){
			axios.get(`https://github.com/skiff26/db/blob/main/posts-en.json`)
				.then ((res) => {
					console.log(res)
				})
				.catch(err => console.error(err))
		}
	}
})