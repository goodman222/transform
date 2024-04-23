import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import globalComponents from "./components/global/index.js";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(globalComponents);
app.mount("#app");
