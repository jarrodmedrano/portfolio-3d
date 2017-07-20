import path from 'path';
import webpack from 'webpack';

process.env.BABEL_ENV = 'browser';

const isProduction = process.env.NODE_ENV === 'production';

console.log(
  isProduction
  ? 'Production mode'
  : 'Development mode'
);

export default {
  devtool: isProduction ? false : 'source-map',
  entry: './app/index.js',
  target: 'web',
  output: {
    path: path.join(__dirname, './app/build/'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(whs)\/).*/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react', 'stage-1'],
            plugins: [
                "add-module-exports",
                "transform-decorators-legacy",
                "transform-class-properties",
                "transform-object-rest-spread"
            ]
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader"}
    ]
  },
  plugins: isProduction
  ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      minimize: true
    }),
  ]
  : [],
  devServer: {
    contentBase: './app/',
    publicPath: './build/'
  }
}
