/*
 * @Author: your name
 * @Date: 2021-03-27 14:46:49
 * @LastEditTime: 2021-03-27 14:50:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-finance\src\api\model\dome.ts
 */
export interface IGetDemo {
    id: number;
    str: string;
}

interface IList {
    id: number;
    version: number;
}

export interface IPostDemo {
    id: number;
    list: IList[];
}
