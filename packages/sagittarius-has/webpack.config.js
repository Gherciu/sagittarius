/* eslint-disable */
const path = require('path')

module.exports = {
  mode:process.env.NODE_ENV,
  target: 'node',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'sagittariusHas',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
