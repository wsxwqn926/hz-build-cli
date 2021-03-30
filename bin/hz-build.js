#! /usr/bin/env node
const program = require('commander');
const requiredPackageVersion = require('../package.json').version;
const hasDir = require('./utils/hasDir');


let cmd, dirname;

program.version(requiredPackageVersion, '-v, --vers', 'output the current version')
  .usage('<command> [options]');

program.command('create <app-name>')
  .description('create a new project powered by hz-cli')
  .action(async(name, cmd) => {
    // 判断是否存在创建的目录
    await hasDir(name);
    cmd = 'create';
    dirname = name;
    require('./creator')(name);
  });

program.parse(process.argv);