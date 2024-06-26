import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'boxicons';
import '@/assets/scss/styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
