module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: false,
  transpileDependencies: ['@vue-async/utils'],
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        //  implementation: require('sass'),
        //  fiber: require('fibers'),
        data: `
         @import "./src/assets/styles/variables.scss";
         `,
      },
      css: {
        // 模块定义设置
        modules: {
          localIdentName:
            process.env.NODE_ENV === 'production' ? '[hash:base64]' : '[path]_[name]_[local]_[hash:base64:5]',
        },
        localsConvention: 'camelCaseOnly',
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true,
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};