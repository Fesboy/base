const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const HappyPack = require("happypack");
const os = require("os");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const happyPackThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        use: "babel-loader"
        // use: "happypack/loader?id=happyBabel"
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
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
            outputPath: "../dist/images",
            publicPath: "/images",
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
    // new HappyPack({
    //   id: "happyBabel",
    //   loaders: ["babel-loader?cacheDirectory=true"],
    //   threadPool: happyPackThreadPool,
    //   verbose: true
    // }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/document.html"),
      minify: {
        collapseWhitespace: true
      }
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, "../dll/vendors.js")
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, "../dll/vendors-manifest.json")
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../public"),
        to: path.resolve(__dirname, "../dist")
      }
    ])
  ],
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  stats: {
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  performance: false,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[contenthash:8].js",
    chunkFilename: "async.[contenthash:8].js"
  }
};
