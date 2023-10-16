import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {IConfigParams} from "./interfaces";

export function buildPlugins({path}:IConfigParams): webpack.WebpackPluginInstance[] {
    return ([new HTMLWebpackPlugin({
        template: path.html,
    }), new webpack.ProgressPlugin()])
}