const merge = require("webpack-merge");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.base");

module.exports = merge(base, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "../dist",
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
      chunkFilename: "async.[name].css"
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify("DEV")
    })
  ],
  output: {
    filename: "bundle.js",
    chunkFilename: "async.[name].js"
  }
});
