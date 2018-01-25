
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    devtool: 'inline-source-map',/*source map 不用于生成环境*/

    devServer: {    /*服务器 自动编译 不用于生成环境*/
        contentBase: './dist',
        hot: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),               /*热替换*/
    ],
})