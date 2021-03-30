/*
 * @Author: wsx
 * @Date: 2021-03-27 14:44:11
 * @LastEditTime: 2021-03-27 14:51:33
 * @LastEditors: Please set LastEditors
 * @Description: api dome
 * @FilePath: \hz-finance\src\api\dome.ts
 */
import http from "@/plugins/http";
import { IGetDemo, IPostDemo } from "./model/dome";
class Basic extends http {
    /**
     * get示例
     */
    getDemo(params: IGetDemo) {
        return this.get<IGetDemo>("/admin/get", params);
    }

    /**
     * post示例
     */
    postDemo(data: IPostDemo) {
        return this.post<IPostDemo>("/admin/get", data);
    }
}

export default new Basic();
