var path = require('path');
module.exports = {
  entry: [
    /*path.resolve(__dirname, 'app'),*/
    './app/scripts/main.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel-loader',

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, 'app')
        ],
        query: {
          presets: ['es2015']
        }
      },
      /*{test: /\.css$/, loader: 'css-loader',
        include: [
          path.resolve(__dirname, 'app')
        ]
      }*/
    ]
  }
};
