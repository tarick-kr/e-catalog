import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vuelidate from 'vuelidate'
import firebase from 'firebase'

Vue.use(vuelidate)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyC4VR1pEyB-TPj3Da0U4Y4lKixH8GUcP_M',
  authDomain: 'top-on-line.firebaseapp.com',
  databaseURL: 'https://top-on-line.firebaseio.com',
  projectId: 'top-on-line',
  storageBucket: 'top-on-line.appspot.com',
  messagingSenderId: '510470734440',
  appId: '1:510470734440:web:7d8e6e335c3ffaebdb31dd'
})
export const db = firebase.firestore()
export const storage = firebase.storage()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
