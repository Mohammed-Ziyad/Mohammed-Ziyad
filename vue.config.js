const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
      }),
    ],
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'My Vue App';
      return args;
    });
  },
});
