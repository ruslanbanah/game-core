module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    filename: 'app.js',
    publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
