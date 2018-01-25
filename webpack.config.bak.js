const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var pathsToClean = [
    'dist',
];

module.exports = {
    entry: './src/js/entry.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'inline-source-map',/*source map 不用于生成环境*/

    devServer: {    /*服务器 自动编译 不用于生成环境*/
        contentBase: './dist',
        hot: true,
    },

    plugins: [
        new CleanWebpackPlugin(pathsToClean),                   /*清理旧文件*/
        new HtmlWebpackPlugin({title: 'Output Management'}),    /*生成html*/
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),               /*热替换*/
        new UglifyJSPlugin(),                                   /*压缩代码*/
    ],
}