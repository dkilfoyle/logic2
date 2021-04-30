const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// .BundleAnalyzerPlugin;

const WorkerPlugin = require("worker-plugin");

module.exports = {
  publicPath: "/logic2/",
  configureWebpack: {
    devtool: "source-map",
    output: {
      globalObject: "this"
    },
    plugins: [new WorkerPlugin()]
    // plugins: [new BundleAnalyzerPlugin()]
  },
  chainWebpack: config => {
    config.plugin("monaco-editor").use(MonacoWebpackPlugin, [
      {
        // Languages are loaded on demand at runtime
        languages: ["ini"]
      }
    ]);
    config.module
      .rule("v")
      .test(/\.v$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "stylus",
      patterns: []
    }
  }
};
