
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

let mode = 'development'

if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

module.exports = {
  mode: mode,

  output: {
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/[name][ext]'
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /(png|jpe?g,|gif|svg)/i,
        type: 'asset/resource',
      },
      {
        test: /\.s?css/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          'css-loader',
          'sass-loader']
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],

  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
}