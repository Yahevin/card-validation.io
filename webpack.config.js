const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const isDevelopment = process.env.NODE_ENV ==='development';

console.log(process.env.NODE_ENV);

const plugins =  [
  new CleanWebpackPlugin(),
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({template: './src/assets/index.html'}),
  new ExtractTextPlugin('style.css'),
  new SpriteLoaderPlugin(),
];

if(isDevelopment) {
  plugins.push(new BrowserSyncPlugin({
    host: 'localhost',
    port: 8000,
  },),)
}

let config = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: {
    polyfill: '@babel/polyfill',
    app: './src/main.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: path.resolve(__dirname, 'src/assets'),
        options: {
          scss: ['vue-style-loader','css-loader','sass-loader'],
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src/assets'),
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/assets'),
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            {loader: 'css-loader', options: {  importLoaders: 1 }},
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts'
          },
        }],
      },
      {
        test: /\.(svg)$/,
	      include: path.resolve(__dirname, 'src/assets/img/icons'),
	      use: [{
		      loader: 'svg-sprite-loader',
		      options: {
			      extract: true,
			      spriteFilename: 'svg/sprite.svg',
		      },
	      }],
      },
      {
        test: /\.(jpg|png)$/,
        include: path.resolve(__dirname, 'src/assets/img'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img'
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: [ '.js', '.vue','.scss','.png','jpg' ],
    alias: {
      'vue$': 'vue/dist/vue.runtime.js',
      '@': path.resolve(__dirname, 'src'),
      jquery: "jquery/src/jquery",
    }
  },
  
  plugins: plugins,
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].chunk.js'
  },
};

if(isDevelopment) {
  config.devServer = {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    port: 8000,
    stats: {
      normal: true
    },
  }
}

module.exports = config;
