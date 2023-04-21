import { createStore } from 'vuex';

export default createStore ({
	state: {
		isSettingsOpen: false,
	},
	getters: {
		settingsStatus(state){
			return state.isSettingsOpen
		}
	},
	mutations: {
		toggleSettings(state){
			state.isSettingsOpen = !state.isSettingsOpen;
		}
	},
	actions: {
	}
})