
const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { optimize } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimeizeCSSAssetsPlugin= require('optimize-css-assets-webpack-plugin');


module.exports= {
    entry: {
        'app': './src/index.js'
    },
    output: {
        
        path: path.join(__dirname, "/app"),
        filename: 'app.js'
    },

    devServer: {
        contentBase: path.join(__dirname, "/app"),
        port: 8081,
        writeToDisk: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },


            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "assets/fonts",
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new OptimeizeCSSAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: "assets/css/styles.css"
        }),
        new HtmlWebpackPlugin ({
            filename: "index.html",
            template: "./src/index.html",
        })
    ]

}