const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "../dist",
    hot: true,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: "bundle.js"
  }
});
