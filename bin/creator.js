/*
 * @Author: wsx
 * @Date: 2021-03-30 21:26:04
 * @LastEditTime: 2021-03-31 00:08:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hz-build-cli\bin\creator.js
 */
// 写入文件，安装依赖
const fs = require('fs-extra');
const chalk = require('chalk');
const path = require('path');
const setProject = require('./utils/setProject');
const {
  spawn
} = require('child_process');
const clearConsole = require('./utils/clearConsole');

let startTime, endTime;

module.exports = async function (name) {
  // CLI 模板文件夹路径
  const src = path.resolve(__dirname, '../template');
  // 目标路径
  const dest = path.resolve(process.cwd(), name);
  // copy .gitignore
  // const gitignore = path.resolve(process.cwd(), name, 'gitignore.md');
  // const gitignoreDest = path.resolve(process.cwd(), name, '.gitignore');

  // console.log(gitignore, gitignoreDest);

  startTime = new Date().getTime()
  clearConsole('cyan', `HZ-BUILD v${require('../package').version}`);
  console.log(`> 项目模板生成于目录： ${chalk.yellow(dest)}`);
  // 拷贝模板文件
  await fs.copy(src, dest);
  // await fs.move(gitignore, gitignoreDest);
  await setProject(name);
  await spawnCmd(dest, null, 'git', ['init'])
  await spawnCmd(dest, null, 'git', ['add .'])
  await spawnCmd(dest, null, 'git', ['commit -m "Initialize by HZ-CLI"'])
  console.log(`> 成功初始化 Git 仓库`);
  console.log(`> 正在自动安装依赖，请稍等...`);
  console.log('');
  await spawnCmd(dest, 'inherit', 'npm', ['install']);
  clearConsole('cyan', `Mapwhale v${require('../package').version}`);
  endTime = new Date().getTime();
  usageTime = (endTime - startTime) / 1000
  console.log(`> 项目已经创建成功，用时${chalk.cyan(usageTime)}s，请输入以下命令继续...`);
  console.log('');
  console.log(chalk.cyan(' $ ') + chalk.blueBright(`cd ${name}`));
  console.log(chalk.cyan(' $ ') + chalk.blueBright('npm run serve'));
};

/**
 * 安装依赖指令
 * @param {string} dest 需要执行指令的路径
 */
function spawnCmd(dest, stdio = 'inherit', cmd, instruction) {
  const ls = spawn(cmd, instruction, {
    cwd: dest,
    stdio: stdio,
    shell: true
  });
  return new Promise((resolve, reject) => {
    ls.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject();
      }
    });
  })

}
