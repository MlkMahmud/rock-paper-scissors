const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Manifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const ScriptExt = require('script-ext-html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            },
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      minify: true,
      favicon: path.join(__dirname, 'public', 'favicon-32x32.png'),
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    }),
    new ScriptExt({
      defaultAttribute: 'defer',
    }),
    new Manifest({
      filename: 'manifest.json',
      name: 'Rock, Paper, Scissors, Lizard, Spock',
      short_name: 'RPSLS',
      start_url: '/',
      orientation: 'portrait',
      display: 'standalone',
      inject: true,
      ios: true,
      icons: [
        {
          src: './public/icon.png',
          sizes: [16, 32, 96, 128, 192, 256, 512],
          destination: 'static/images',
        },
      ],
    }),
    new InjectManifest({
      swSrc: './src/service-worker.js',
      exclude: [/static\/images\/icon_.*\.png/],
    }),
  ]
};
