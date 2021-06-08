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
        filename: '[name].[chunkhash].js',
        path: path.resolve(ROOT_DIR, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            { 
                test: /\.js(x?)$/,
                exclude: /node_modules|fonts/,
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
                test: /\.(woff(2)?|ttf|eot|png|svg|jpg|gif|pdf)$/,
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
        contentBase: SRC_DIR,
        compress: true,
        port: 4200,
        watchContentBase: true,
        progress: true,
        hot: true,
        open: false,
        historyApiFallback: true,
        inline: true
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".js", ".jsx"],
        alias: { 
            src: SRC_DIR,
            pages: path.resolve(SRC_DIR, 'pages'),
            common: path.resolve(SRC_DIR, 'common'),
            components: path.resolve(SRC_DIR, 'components'),
            reduxConfig: path.resolve(SRC_DIR, 'reduxConfig'),
            shells: path.resolve(SRC_DIR, 'shells')
        },
    }
};

module.exports = config;
