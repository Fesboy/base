const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    vendors: ["react", "react-dom", "prop-types", "antd"]
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        include: /src/,
        use: [
          MiniCssExtractPlugin.loader,
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
    new webpack.DllPlugin({
      context: __dirname,
      path: path.resolve(__dirname, "../dll/[name]-manifest.json"),
      name: "[name]_[hash]"
    }),
    new MiniCssExtractPlugin({
      filename: "vendors.css"
    })
  ],
  output: {
    path: path.resolve(__dirname, "../dll"),
    filename: "vendors.js",
    library: "[name]_[hash]",
    libraryTarget: "this"
  }
};
