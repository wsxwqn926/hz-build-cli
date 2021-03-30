/*
 * @Author: your name
 * @Date: 2021-03-26 21:27:39
 * @LastEditTime: 2021-03-27 20:26:57
 * @LastEditors: Please set LastEditors
 * @Description: 路由验证
 * @FilePath: \hz-finance\src\router\guard\permissionGuard.ts
 */
import type { Router } from "vue-router";

import { PageEnum } from "@/enums/pageEnum";

const LOGIN_PATH = PageEnum.BASE_LOGIN;

const whitePathList: PageEnum[] = [LOGIN_PATH];
export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // console.log("🚀 ~ file: progressGuard.ts ~ line 17 ~ router.beforeEach ~ nProgress.start", to);
    if (to.matched.length === 0) {
      next(PageEnum.ERROR_PAGE);
    } else {
      if (whitePathList.includes(to.path as PageEnum)) {
        next();
      } else {
        next();
      }
    }

    // return true;
  });
}
// export function createPermissionGuard(router: Router) {
//   router.beforeEach(async (to, from, next) => {
//     console.log("🚀 ~ file: permissionGuard.ts ~ line 19 ~ router.beforeEach ~ to, from", to, from);
//     // Jump to the 404 page after processing the login && to.name === PAGE_NOT_FOUND_ROUTE.name
//     if (to.matched.length === 0) {
//       next(PageEnum.ERROR_PAGE);
//       return true;
//     }
//     if (from.path === LOGIN_PATH) {
//       next(PageEnum.BASE_HOME);
//       return true;
//     }

//     // Whitelist can be directly entered
//     if (whitePathList.includes(to.path as PageEnum)) {
//       next();
//       return true;
//     }

//     // const token = userStore.getTokenState;

//     // // token does not exist
//     // if (!token) {
//     //   // You can access without permission. You need to set the routing meta.ignoreAuth to true
//     //   if (
//     //     to.meta.ignoreAuth
//     //     // || to.name === FULL_PAGE_NOT_FOUND_ROUTE.name
//     //   ) {
//     //     next();
//     //     return;
//     //   }
//     //   // redirect login page
//     //   const redirectData: { path: string; replace: boolean; query?: Indexable<string> } = {
//     //     path: LOGIN_PATH,
//     //     replace: true,
//     //   };
//     //   if (to.path) {
//     //     redirectData.query = {
//     //       ...redirectData.query,
//     //       redirect: to.path,
//     //     };
//     //   }
//     //   next(redirectData);
//     //   return;
//     // }
//     // if (permissionStore.getIsDynamicAddedRouteState) {
//     //   next();
//     //   return;
//     // }
//     // const routes = await permissionStore.buildRoutesAction();

//     // routes.forEach((route) => {
//     //   router.addRoute((route as unknown) as RouteRecordRaw);
//     // });

//     const redirectPath = (from.query.redirect || to.path) as string;
//     const redirect = decodeURIComponent(redirectPath);
//     const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
//     // permissionStore.commitDynamicAddedRouteState(true);
//     next(nextData);
//   });
// }
