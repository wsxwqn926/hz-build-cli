/*
 * @Author: your name
 * @Date: 2021-03-27 15:03:26
 * @LastEditTime: 2021-03-27 15:07:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-finance\src\api\login.ts
 */
import http from "@/plugins/http";
import { ILogin } from "./model/login";
class UserApi extends http {
    login(data: ILogin) {
        return this.post<ILogin>("HZ-USER-ROLE/jwt/doLogin/v2", data);
    }
}
export default new UserApi();
