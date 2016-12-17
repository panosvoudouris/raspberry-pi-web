const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index'
  },

  output: {
    path: './dist',
    filename: '[name].[hash].js'
  },

  module: {
    preLoaders: [
      { test: /\.js?$/, loader: 'eslint-loader', exclude: [ /node_modules/ ] }
    ],

    loaders: [
      { test: /\.js$/, exclude: [ /node_modules/ ], loader: 'babel' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') }
    ]
  },

  eslint: {
    emitErrors: true,
    failOnError: true
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      js: [ 'vendor.[hash].js', '[name].[hash].js' ],
      chunks: {
        'head': {
          'css': '[name].[hash].css'
        },
        'main': {
          'entry': '[name].[hash].js'
        },
      }
    }),
    new ExtractTextPlugin('[name].[hash].css', { allChunks: true })
  ],

  devServer: {
    stats: 'minimal'
  },
  devtool: 'source-map'
};
