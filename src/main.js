// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'
import 'firebase/storage'

Vue.use(
	Vuelidate,
	Uimini
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
  	var config = {
	    apiKey: 'AIzaSyCKnYc4Z8F97hwNoFFQvOppQZ2MsAsOVsc',
	    authDomain: 'time-library-5aef2.firebaseapp.com',
	    databaseURL: 'https://time-library-5aef2.firebaseio.com',
	    projectId: 'time-library-5aef2',
	    storageBucket: 'time-library-5aef2.appspot.com',
	    messagingSenderId: '130745681530'
  	};
  	firebase.initializeApp(config);
  }
})
