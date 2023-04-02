const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        'single-spa.config': './src/single-spa.config.js'
    },
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            { 
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader',
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        fallback: {
            fs: false
        }
    },
    plugins: [
    ],
    devtool: 'source-map',
    externals: [],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    }
};