const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.join(__dirname, '..', 'src', 'index'),
    plugins: [new HtmlWebpackPlugin()],
};