import { createApp } from "vue";
import pinia from "@/modules/app/store";
import antd from "ant-design-vue";
import router from "@/modules/app/router";
import i18n from "@/plugins/i18n";
import "ant-design-vue/dist/antd.less";
import "@/modules/app/assets/styles/main.scss";
import App from "@/App.vue";
import BaseComponentRegister from "./modules/app/ui/components";

const app = createApp(App);

// Plugin
app.use(antd);
app.use(pinia);
app.use(router);
app.use(i18n); // Optional

// Base Component
BaseComponentRegister(app);

app.mount("#app");
