import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld from './views/HelloWorld.vue'
import NotFound from './views/NotFound.vue'
import App from './App.vue'
import './index.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/hello', name: 'Hello', component: HelloWorld },
  { path: '/:catchAll(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')