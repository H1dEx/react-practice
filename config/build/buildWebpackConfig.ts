import {IConfigParams} from "./interfaces";
import webpack from "webpack";
import {buildResolvers} from "./builldResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: IConfigParams): webpack.Configuration {
    const {path, mode, isDev} = options;
    const config: webpack.Configuration = {
        mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.output,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined,
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
    };

    return config;
}