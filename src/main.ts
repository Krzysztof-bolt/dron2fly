/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.css';
import 'animate.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
