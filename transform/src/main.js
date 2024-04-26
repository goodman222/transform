import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import globalComponents from "./components/global/index.js";

import MainPage from "./components/global/MainPage.vue";
import AboutUsPage from "./components/global/AboutUsPage.vue";
import TariffsPage from "./components/global/TariffsPage.vue";
import ResultsPage from "./components/global/ResultsPage.vue";
import ContactsPage from "./components/global/ContactsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage, name: "main" },
    { path: "/about", component: AboutUsPage, name: "about" },
    { path: "/tariffs", component: TariffsPage, name: "tariffs" },
    { path: "/results", component: ResultsPage, name: "results" },
    { path: "/contacts", component: ContactsPage, name: "contacts" },
  ],
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(globalComponents);
app.mount("#app");
