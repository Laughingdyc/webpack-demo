const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(
    webpackCommonConf,
    {
        mode: 'production',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, '..', 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ],
        }
    }
)