const merge = require("webpack-merge");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const base = require("./webpack.base");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(base, {
  mode: "production",
  // devtool: "cheap-module-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.[contenthash:8].css",
      chunkFilename: "async.[contenthash:8].css"
    }),
    new webpack.DefinePlugin({
      ENV: JSON.stringify("PROD")
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserJSPlugin()]
  }
});
