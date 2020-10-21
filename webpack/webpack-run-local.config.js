const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './client/src'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/react', '@babel/preset-typescript'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}