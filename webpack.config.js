const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: './src/app/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    }
}
