const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/index.js'
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    optimization: {
        minimize: false,
        namedModules: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",   // where to look for html
            filename: "index.html"          // where to put index.html in dist directory
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: 4000,
        proxy: {
            '/': {
                target: 'http://localhost:8085/abc',
                pathRewrite: {
                    '^/' : ''
                },
                secure : false,
                changeOrigin: true
            }
        }
    }

}
