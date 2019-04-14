import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import task from './task'
import tags from './tags'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		task,
		tags
	}
})

