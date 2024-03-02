// import './assets/main.css'
import './assets/w3.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// export const bus = new Vue();

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(BootstrapVue)

app.mount('#app')
