/*
 * @Author: wsx
 * @Date: 2021-03-30 22:53:09
 * @LastEditTime: 2021-03-30 23:58:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-build-cli\bin\utils\setProject.js
 */
const fs = require('fs');
const program = require('commander');

module.exports = function (name){
  // package.json
  fs.readFile(`${process.cwd()}/${name}/package.json`, (err, data) => {
    if (err) throw err;
    let _data = JSON.parse(data.toString())
    _data.name = name
    _data.version = '1.0.0'
    let str = JSON.stringify(_data, null, 4);
    fs.writeFile(`${process.cwd()}/${name}/package.json`, str, function (err) {
      if (err) throw err;
    })
  });
  // vue.config.js
  fs.readFile(`${process.cwd()}/${name}/vue.config.js`,'utf8', (err, data) => {
    if (err) throw err;
    let _data = data
    _data = _data.replace(/hzLib/g,name)
    let str = _data;
    fs.writeFile(`${process.cwd()}/${name}/vue.config.js`, str, function (err) {
      if (err) throw err;
    })
  });
  // vue.config.js
  let path = "src/router/index.ts"
  fs.readFile(`${process.cwd()}/${name}/${path}`,'utf8', (err, data) => {
    if (err) throw err;
    let _data = data.replace(/hzLib/g,name)
    let str = _data;
    fs.writeFile(`${process.cwd()}/${name}/${path}`, str, function (err) {
      if (err) throw err;
    })
  });
}