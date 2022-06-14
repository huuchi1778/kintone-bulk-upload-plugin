/* eslint-disable */
const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      desktop: path.resolve(__dirname, 'src/js/desktop.js'),
      config: path.resolve(__dirname, 'src/js/config.js'),
      customization: path.resolve(__dirname, 'src/js/customization.js')
    },
    output: {
      path: path.resolve(__dirname, "build/js/")
    },
    target: ["web", "es5"],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    }
  };
};
