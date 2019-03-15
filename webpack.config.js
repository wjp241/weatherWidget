const path = require('path');

module.exports = {
  entry: './components/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader',
        ]
      }
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    port: 4000,
    open: true,
  },
};
