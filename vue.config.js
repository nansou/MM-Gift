module.exports = {
  lintOnSave: false,
  baseUrl: './',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: undefined,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8003,
    https: false,
    hotOnly: false,
    // proxy:{
    //   '/api': {
    //     target: 'http://api.dataoke.com',
    //     changeOrigin: true
    //   }
    // },
    proxy: {
      '/apis': { //将www.exaple.com印射为/apis
        // target: 'http://test-api.gufuhui.com', // 接口域名
        // http://mtest-weixin.uxibank.cn/api/ 'http://app.baofuhui.cn'
        // 新测试地址
        target: 'http://api.dataoke.com',
        // target: 'http://10.0.130.59:12020',
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/apis': '' //需要rewrite的,
        }
      }
    },
  },
  
  css: {
    modules: true,
    sourceMap: true
  }
};
