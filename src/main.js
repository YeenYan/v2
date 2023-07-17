import './assets/css/base.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import ContentHeader from "@/components/UI/ContentHeader.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.component('content-header', ContentHeader);

app.mount('#app');
