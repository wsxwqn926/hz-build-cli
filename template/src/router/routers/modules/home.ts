/*
 * @Author: your name
 * @Date: 2021-03-26 16:10:03
 * @LastEditTime: 2021-03-27 19:08:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-finance\src\router\routers\modules\home.ts
 */
import type { AppRouteModule } from "@/router/types";

const home: AppRouteModule = {
    path: "about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
        icon: "ion:home-outline",
        title: "routes.dashboard.welcome"
    }
};

export default {
    home
};
