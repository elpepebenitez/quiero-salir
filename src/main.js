import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

import firebase from 'firebase/app'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP0HNl0b3PwdfuHrWjd5B0haGIosnShQs",
  authDomain: "quierosalir-21f32.firebaseapp.com",
  projectId: "quierosalir-21f32",
  storageBucket: "quierosalir-21f32.appspot.com",
  messagingSenderId: "886385780697",
  appId: "1:886385780697:web:af250958401ae69ec69bc8",
  measurementId: "G-2RYQMDCYLE"
};

firebase.initializeApp(firebaseConfig)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
