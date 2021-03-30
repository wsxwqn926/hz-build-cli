/*
 * @Author: your name
 * @Date: 2021-03-30 23:47:45
 * @LastEditTime: 2021-03-31 00:06:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-build-cli\nodeJs.js
 */
const fs = require('fs');
const program = require('commander');

console.log("program.init---",process.cwd())
// fs.readFile(`${process.cwd()}/template/vue.config.js`, 'utf8', (err, data) => {
//   if (err) throw err;
//   let _data = data
//   _data = _data.replace(/hzLib/g,"name")
//   console.log(_data,typeof _data)
//   // let str = JSON.stringify(_data, null, 4);
//   // fs.writeFile(`${process.cwd()}/template/vue.config.js`, str, function (err) {
//   //   if (err) throw err;
//   // })
// });