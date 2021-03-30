/**
 * @Description: 解析地址栏中的参数
 * @param  key 不传则返回所有参数；传key则返回key值对应的参数，若没有key对应大参数则返回undefined
 */
interface IReturnObj {
  [propName: string]: string
}
export function getWindowParams(key?: keyof IReturnObj): { [key: string]: string } | string {
  const afterUrl = window.location.hash.split("?");// (问号以后的字符串)
  const afterEqual = afterUrl[1].split("&"); //afterUrl.split("&");

  const returnObj: IReturnObj = {};
  console.time();
  afterEqual.forEach((item: string) => {
    const arr: string[] = item.split("=");
    returnObj[arr[0]] = arr[1];
  });
  console.timeEnd();
  if (key && returnObj[key]) {
    return returnObj[key];
  }
  console.log(returnObj);

  return returnObj;
}
