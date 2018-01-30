const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

var pathsToClean = [
    'dist',
];

module.exports = {
    entry: {
        index: './src/js/entry.js',
        another: './src/js/another.js',
    },

    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(pathsToClean),                   /*清理旧文件*/
        new HtmlWebpackPlugin({title: 'Webpack'}),    /*生成html*/

        new webpack.optimize.CommonsChunkPlugin({   /* 指定公共 bundle 的名称 */
            name: 'common'
        }),
    ],
}