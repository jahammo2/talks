var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: 'index.html' }
      ]
    },
    host: '0.0.0.0',
    hot: true,
    inline: true,
    port: '8080',
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:3000'
      }
    }
  },
  devtool: 'inline-source-map',
  entry: {
    bundle: './src/index.jsx'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['stage-2', 'react', 'es2015'] }
        }
      },
      {
        test: /\.(gif|png|jpg|svg|woff|woff2|ttf|eot)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 25000
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          emitWarning: true,
          formatter: require('eslint-friendly-formatter')
        }
      }
    }),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};

module.exports = config;
