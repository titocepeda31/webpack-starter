//const resolve = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry:"./index.js",
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename:"[name].[contenthash].js",
        publicPath:"",
    },    
    module:{
        rules : [
            {
                use:"babel-loader",
                test:/.(js | jsx)$/,
                exclude: /node_modules/
            },
            {
                use:["style-loader","css-loader","sass-loader"],
                test : /.(css|sass|scss)$/,
                exclude:/app.css$/
            },
            {
                test:/app.css$/,
                use :[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                //type:"asset",
                test:/\.(png|svg|jps|jpeg|gif)$/i,
                loader:"file-loader",
            }
        ],
    },
    resolve:{
        extensions:[".js",".jsx",".json"],
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./index.html",
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: "src/assets", to: "assets/"
                },
            ],
        }),

    ]
};