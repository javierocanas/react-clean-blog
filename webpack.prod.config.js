const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: false,
  
  entry: [
    '@babel/polyfill',
    './src/index'
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'style.css' }),
    new CompressionPlugin(),
    new webpack.NormalModuleReplacementPlugin(/iconv-loader$/, 'node-noop'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
      },
      {
        test: /\.png$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
