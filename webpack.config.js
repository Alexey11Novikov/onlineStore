const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/App.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react'],
              plugins: [
                '@babel/transform-runtime'
              ]
            }
          },
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'postcss-loader',
          ],
        },
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'styles/[name].css',
        }),
        new HtmlWebpackPlugin({
          template: "./index.html"
        }),
        // для доступа к переменной окружения process
        // https://stackoverflow.com/questions/65018431/webpack-5-uncaught-referenceerror-process-is-not-defined   
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ],
    };