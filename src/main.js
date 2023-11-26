
import { createApp } from 'vue'
import App from './HookApp.vue'
import HookComp from './components/HookComp.vue'

const app = createApp(App)
app.component('hook-comp', HookComp)
app.mount('#app')
