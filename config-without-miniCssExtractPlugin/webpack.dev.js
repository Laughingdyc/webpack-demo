const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')

module.exports = merge(
    webpackCommonConf, 
    {
        mode: 'development',
        devServer: {
            port: 10086,
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