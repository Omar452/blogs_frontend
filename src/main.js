import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vue-material-design-icons/styles.css';
import './assets/style.css'

createApp(App).use(router).mount('#app')
