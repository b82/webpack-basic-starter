
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app.jsx',
    output: {
        filename: './public/js/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                loader: "file-loader?name=/img/[name].[ext]"
            }
            // {
            //     test: /\.otf$/,
            //     loader: "file-loader?name=/fonts/Brown/[name].[ext]"
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./public/css/style.css', {
            allChunks: true
        })
    ]
};
