const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.join(__dirname, '..', 'src', 'index'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],

                        /**
                         * You can also speed up babel-loader by 
                         * as much as 2x by using the cacheDirectory option. 
                         * This will cache transformations to the filesystem. 
                         * 
                         * 官方建议打开，可以缓存转义文件，提高2倍编译速度
                         */
                        cacheDirectory: true
                    }
                },
    
                /* 转义 src 目录 */
                include: path.join(__dirname, '..', 'src', 'index'),
                
                /* 不转义 node_modules 目录 */
                exclude: /node_modules/,
    
                
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
};