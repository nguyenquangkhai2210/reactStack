const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../../src/'),
      common: path.resolve(__dirname, '../../src/common/'),
      main: path.resolve(__dirname, '../../src/main/'),
      store: path.resolve(__dirname, '../../src/store/'),
      asset: path.resolve(__dirname, '../../src/main/asset/'),
      constant: path.resolve(__dirname, '../../src/main/constant/')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      /* html */
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },

      /* css */
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      /* scss */
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      },

      /* images */
      {
        test: /\.(png|svg|jpg|gif|mp4)$/,
        use: [
          'file-loader'
        ]
      },

      /* fonts */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['../../dist']),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    noEmitOnErrors: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/'
  }
};
