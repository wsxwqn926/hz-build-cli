/*
 * @Description: st
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-29 19:16:09
 */
import { createStore, createLogger } from "vuex";
// import createPersistedState from 'vuex-persistedstate'
// import { store as settings, SettingStore, SettingsState } from "@/store/modules/settings";
// import { store as permission, PermissionStore, PermissionState } from "@/store/modules/permission";
import { store as user } from "@/store/modules/user";
import { IUserState, IUserStore } from "./modules/user/state-types";
// import { store as tagViews, TagsStore, TagsViewState } from "@/store/modules/tagsview";

export interface RootState {
    user: IUserState
}

export type Store = IUserStore<Pick<RootState, "user">>


// define injection key
// export const key: InjectionKey<Store<RootState>> = Symbol();
// plugins.push(createPersistedState({ storage: window.sessionStorage }))
const debug = process.env.NODE_ENV !== "production";
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    // strict: debug,
    modules: {
        user
        // settings,
        // permission,
        // user,
        // tagViews
    }
});

// export function useStore(): Store {
//     return useVuexStore();
// }
export function useStore(): Store {
    return store as Store;
}
