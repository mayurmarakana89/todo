'use strict'

const path = require('path');

const config = {
    mode: "development",
    context: __dirname,
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
};

module.exports = config;