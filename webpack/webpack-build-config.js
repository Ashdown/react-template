
module.exports = {
    entry: [
        './client/src'
    ],
    output: {
        filename: 'home.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};