let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let webpackMerge = require('webpack-merge');

let webpackConfig = {
    entry: {
        polyfills: './src/polyfills.ts',
        app: './src/main.ts'
    },
    output: {
        publicPath: 'aot/',
        path: path.resolve(__dirname, './aot')
    },
    plugins: [
       
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [  
                    '@ngtools/webpack',
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    }

};

let defaultConfig = {
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
        devServer: {
        contentBase: './',
        port: 3001,
        inline: true,
        stats: 'errors-only',
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 100, poll: 500}
    },

    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
};

module.exports = webpackMerge(defaultConfig, webpackConfig);