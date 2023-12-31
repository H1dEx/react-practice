import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {IConfigParams} from "./interfaces";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({path}: IConfigParams): webpack.WebpackPluginInstance[] {
    return ([new HTMLWebpackPlugin({
        template: path.html,
    }), new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })])
}