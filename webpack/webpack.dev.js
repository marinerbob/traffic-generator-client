const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: DIST_DIR,
        compress: true,
        port: 4200,
        watchContentBase: true,
        progress: true,
        hot: true,
        open: false,
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});
