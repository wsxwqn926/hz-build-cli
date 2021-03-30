/*
 * @Author: your name
 * @Date: 2021-03-26 15:13:35
 * @LastEditTime: 2021-03-30 14:37:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-finance\src\main.ts
 */
import { createApp } from "vue";
import router from "./router";
import { store } from "./store";
import "@/router/guard";

import { useHanUi } from "@/plugins/HanUi";
// import "@hz-lib/han-ui-next/lib/theme-chalk/index.css";
import App from "./App.vue";
(async () => {
    const app = createApp(App);
    useHanUi(app);
    app.use(router);
    app.use(store);

    // Mount when the route is ready
    await router.isReady();

    app.mount("#app");
})();
