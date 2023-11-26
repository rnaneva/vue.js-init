
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App10.vue'
import Foods from './components/Foods.vue'
import Animals from './components/Animals.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/animals', component: Animals},
        {path: '/foods', component: Foods},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
