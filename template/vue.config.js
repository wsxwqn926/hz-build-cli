/*eslint-env node*/
/*
 * @Description: Do not edit
 * @Author: wangsx
 * @Date: 2021-03-18 11:02:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-30 23:51:04
 */
const path = require("path");
const webpack = require("webpack");
const { name, version } = require("./package.json");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const resolve = dir => path.join(__dirname, dir);

function log(label, content) {
  console.log("\x1b[1m%s\x1b[31m%s\x1b[0m", label, content);
}

log("APP_NAME: ", `${name} ${version}`);
log("NODE_ENV: ", process.env.NODE_ENV);


const PORT = 6080;
const IP = "192.168.10.20";//外网

const plugins = [
  new webpack.DefinePlugin({
    "process.env.VUE_APP_NAME": JSON.stringify(name)
  })
];
if (process.env.NODE_ENV === "production") {
  plugins.push(
    new CompressionWebpackPlugin({
      test: /\.js$|\.html$|\.css$/,
      // 超过4kb压缩
      threshold: 4096
    })
  );
}

// eslint-disable-next-line no-undef
module.exports = {
  publicPath: "./",
  lintOnSave: true,
  assetsDir: "static",
  devServer: {
    // host: 'localhost',
    port: PORT,
    https: false,
    hotOnly: true,
    hot: true,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      // websocket
      "/wsuri/*": {
          target: "ws://" + IP + ":6220",
          ws: true,
          changeOrigin: true,
          pathRewrite: {
              "^/wsuri": "/"
          }
      },
      // 图片地址
      "/picUrl/*": {
          target: "http://10.73.171.78:8080/pro/",
          changeOrigin: true,
          pathRewrite: {
              "^/picUrl": "/"
          }
      },
      // 网关代理
      "/api/*": {
          target: "http://" + IP + ":6288",
          changeOrigin: true,
          pathRewrite: {
              "^/api": "/"
          }
      },
      // 在押人员图片
      "/imgUrl/*": {
          target: "http://10.73.171.78:8080/pro/",
          changeOrigin: true,
          pathRewrite: {
              "^/imgUrl": "/"
          }
      },
      // 访问上传的文件
      "/upload/*": {
          target: "http://" + IP + ":6080/resources",
          changeOrigin: true,
          pathRewrite: {
              "^/upload": "/"
          }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    },
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: "hzLib",
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
      // 按需加载相关，设置为 webpackJsonp_hzLib 即可
      jsonpFunction: "webpackJsonp_hzLib"
    },
    plugins: plugins
  }
};
