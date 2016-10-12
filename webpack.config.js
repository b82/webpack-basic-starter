
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var environment = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/App.jsx',
    output: {
        filename: './dist/build.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
            // {
            //     test: /\.jpe?g$|\.gif$|\.png$/i,
            //     loader: "file-loader?name=/img/[name].[ext]"
            // }
            // {
            //     test: /\.otf$/,
            //     loader: "file-loader?name=/fonts/Brown/[name].[ext]"
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./src/css/style.css', {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(environment)
            }
        })
    ]
};
