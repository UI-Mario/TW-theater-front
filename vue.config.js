module.exports = {
  outputDir: 'dist', //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  // lintOnSave: false, //是否开启eslint
  devServer: {
    host: 'localhost',
    port: '8081',
    https: false, //是否使用https协议
    hotOnly: false, //是否开启热更新
    proxy: {
      '/v2': {
        target: 'https://douban.uieee.com',
        changeOrigin: true,
        // ws: false, //如果要代理 websockets，配置这个参数
        pathRewrite: {
          '^/v2': '/v2'
        }
      }
    },
  }
};
