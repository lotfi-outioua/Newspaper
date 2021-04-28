import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from '@/services/Api'

Api.init('https://newsapi.org/v2/');

const app = createApp(App).use(store).use(router);

app.mount('#app');
