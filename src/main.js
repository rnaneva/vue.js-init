
import { createApp } from 'vue'
import App from './App4.vue'
import Slot from './components/Slot.vue'

const app = createApp(App);
app.component('slot-comp', Slot)
app.mount('#app')
