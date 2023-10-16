import {IConfigParams} from "./interfaces";
import webpack from "webpack";
import {buildResolvers} from "./builldResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";

export function getBuildConfig(options:IConfigParams): webpack.Configuration {
    const {path, mode} = options;

    return {
        mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.output,
            clean: true,
        },
        devtool: 'inline-source-map',
        resolve: buildResolvers(),
        module: {
            rules: buildLoaders(),
        },
        plugins: buildPlugins(options)
    }
}