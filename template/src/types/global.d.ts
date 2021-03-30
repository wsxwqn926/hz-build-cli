/*
 * @Author: wsx
 * @Date: 2021-03-27 10:31:01
 * @LastEditTime: 2021-03-29 18:44:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-finance\src\types\global.d.ts
 */

declare type Recordable<T extends any = any> = Record<string, T>;

declare type Indexable<T extends any = any> = {
    [key: string]: T;
};
