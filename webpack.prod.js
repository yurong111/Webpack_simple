
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');


module.exports = merge(common, {

    devtool: 'source-map',  /*生产环境中启用 source map，异于测试环境的 source map 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。*/

    plugins: [
        new UglifyJSPlugin({        /*压缩代码*/
           sourceMap: true
        }),

        new webpack.DefinePlugin({
            'process.nev.NODE_ENV': JSON.stringify('production')
        })
    ],
})