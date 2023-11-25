
import { createApp } from 'vue'
import App from './App1.vue'
import TodoItem from './components/TodoItem.vue'

const app = createApp(App);
app.component('todo-item', TodoItem)
app.mount('#app')
