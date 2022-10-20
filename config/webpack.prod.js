const webpackCommonConf = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        plugins: [
            new MiniCssExtractPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
            ],
        }
    }
)