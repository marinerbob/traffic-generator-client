const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_DIR = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

const config = {
    entry: {
        main: path.resolve(SRC_DIR, 'index.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(ROOT_DIR, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            { 
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: {
                      loader: 'babel-loader',
                      options: {
                          presets: ['@babel/preset-env', '@babel/preset-react'],
                          plugins: ['@babel/plugin-transform-runtime']
                    }
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(PUBLIC_DIR, 'index.html')
        }),
        new WebpackNotifierPlugin({ alwaysNotify: false })
    ],
    optimization: {
        splitChunks: { 
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    devServer: {
        contentBase: path.join(ROOT_DIR, "dist"),
        compress: true,
        port: 4200,
        watchContentBase: true,
        progress: true,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: { 
            src: SRC_DIR,
            pages: path.resolve(SRC_DIR, 'pages'),
            common: path.resolve(SRC_DIR, 'common'),
            components: path.resolve(SRC_DIR, 'components')
        },
    }
};

module.exports = config;
