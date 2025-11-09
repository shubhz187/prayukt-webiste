import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import Home from './pages/Home.vue'
import WhoWeAre from './pages/WhoWeAre.vue'
import OurCompanies from './pages/OurCompanies.vue'
import HowWeGrow from './pages/HowWeGrow.vue'
import Investors from './pages/Investors.vue'
import News from './pages/News.vue'
import Careers from './pages/Careers.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/who-we-are', component: WhoWeAre },
  { path: '/our-companies', component: OurCompanies },
  { path: '/how-we-grow', component: HowWeGrow },
  { path: '/investors', component: Investors },
  { path: '/news', component: News },
  { path: '/careers', component: Careers }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

