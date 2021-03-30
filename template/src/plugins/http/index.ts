/*
 * @Author: wsx
 * @Date: 2021-03-27 11:00:39
 * @LastEditTime: 2021-03-27 15:20:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-finance\src\utils\http\index.ts
 */
import instance from "./interceptors";
import { Http } from "@/enums/htppEnum";
import { IAxiosRequest, ICustomResponse } from "./types";
import { AxiosResponse } from "axios";

class Abstract {
    // 外部传入的baseUrl
    protected baseURL: string = Http.baseUrl;
    // 自定义header头
    protected headers: object = {
        ContentType: "application/json;charset=UTF-8"
    }

    private apiAxios<T>({ baseURL = this.baseURL, headers = this.headers, method, url, data, params }: IAxiosRequest<T>): Promise<ICustomResponse> {

        // url解析 如果url已#号开头则不使用默认的baseUrl
        if (url.startsWith("#")) {
            baseURL = "";
        }

        return new Promise((resolve, reject) => {
            instance({
                baseURL,
                headers,
                method,
                url,
                params,
                data

            }).then((res: AxiosResponse<any>) => {
                // 200:服务端业务处理正常结束
                if (res.status === 200) {
                    if (res.data.code === 200) {
                        resolve({
                            status: true,
                            message: "success",
                            data: res.data?.data,
                            origin: res.data
                        });
                    } else {
                        // Vue.prototype.$message({ type: "error", message: res.data?.errorMessage || (url + "请求失败") });
                        resolve({
                            status: false,
                            message: res.data?.message || (url + "请求失败"),
                            data: res.data?.data,
                            origin: res.data
                        });
                    }
                } else {
                    resolve({ status: false, message: res.data?.message || (url + "请求失败"), data: null });
                }
            }).catch((err: { message: string; }) => {
                const message = err?.message || (url + "请求失败");
                // Vue.prototype.$message({ type: "error", message });
                // eslint-disable-next-line
                reject({ status: false, message, data: null });
            });
        });
    }

    /**
     * GET类型的网络请求
     */
    protected get<T>(url: string, params: T) {
        return this.apiAxios<T>({ method: "GET", url, params });
    }

    /**
     * POST类型的网络请求
     */
    protected post<T>(url: string, data: T) {
        return this.apiAxios<T>({ method: "POST", url, data });
    }
}

export default Abstract;
