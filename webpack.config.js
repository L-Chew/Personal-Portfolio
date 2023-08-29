const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [`${SRC_DIR}/index.js`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  devServer: {
    static: DIST_DIR,
    port: 9000,
  },
  // devtool: 'source-map',
  // watch: true,
  // plugins: [
  //   new BrowserSyncPlugin({
  //     host: 'localhost',
  //     port: 8888,
  //     server: { baseDir: ['client/dist'] }
  //   })
  // ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", {"runtime": "automatic"}]
            ],
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|otf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          },
        ],
      }
    ]
  }
};