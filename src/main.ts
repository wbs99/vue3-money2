import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Nav from "./components/Nav.vue";
import Layout from "./components/Layout.vue";
import "virtual:svg-icons-register";
import Icon from "./components/Icon.vue";

const app = createApp(App);
app.use(router);
app.component("Nav", Nav);
app.component("Layout", Layout);
app.component("Icon", Icon);
app.mount("#app");
