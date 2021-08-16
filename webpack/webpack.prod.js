const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    optimization: {
        splitChunks: { 
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                },
            },
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true
            })
        ]
    }
});
