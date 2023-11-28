
import { createApp } from 'vue'
import App from './App12.vue'
import compOne from './components/CompOne.vue'
import compTwo from './components/CompTwo.vue'


const app = createApp(App)
app.component('comp-one', compOne)
app.component('comp-two', compTwo)
app.mount('#app')
