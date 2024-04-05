const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const config = {
    mode: env.mode || 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      open: true,
      hot: true,
      port: 9000 
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'images/[name].[hash:7].[ext]', 
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'public/images', to: 'images' }, 
          { from: 'public/styles', to: 'styles' },
        ],
      }),
    ],
  }

  return config;
};