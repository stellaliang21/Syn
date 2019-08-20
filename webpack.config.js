module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist',
    publicPath: '/',

  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};