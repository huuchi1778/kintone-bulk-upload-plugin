/* eslint-disable */
const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      desktop: path.resolve(__dirname, 'src/js/desktop/index.ts'),
      config: path.resolve(__dirname, 'src/js/config/index.ts'),
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
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    }
  };
};
