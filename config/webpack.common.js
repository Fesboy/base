const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        use: "babel-loader"
      },
      {
        test: /\.less$/,
        include: /src/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            // outputPath: "../dist/images/",
            limit: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]-[hash:5].min.[ext]",
            limit: 5000,
            publicPath: "fonts/",
            outputPath: "fonts/"
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/document.html")
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[contenthash:8].js"
  }
};
