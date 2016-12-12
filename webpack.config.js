let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpackMerge = require('webpack-merge');


let webpackConfig = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts'
    },
    output: {
        publicPath: 'dist/',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        // new ExtractTextPlugin("./style.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'config/jit-tpl.html',
            inject: true
        })
    ],

    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [
                'awesome-typescript-loader',
                'angular2-router-loader',
                'angular2-template-loader'
            ]
        }, {
            test: /\.css$/,
            include: `${__dirname}/src`,
            loader: ['css-loader', 'style-loader']
        //         use: ExtractTextPlugin.extract({
        //             fallbackLoader: "style-loader",
        //             loader: 'css-loader'
        //         })
           }, {
            test: /\.styl$/,
            use: [
                'stylus-loader',
                'css-loader'
            ],
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
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
        port: 4001,
        inline: true,
        stats: 'errors-only',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 500
        }
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