import {IConfigParams} from "./interfaces";
import webpack from "webpack";
import {buildResolvers} from "./builldResolvers";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options:IConfigParams): webpack.Configuration {
    const {path, mode} = options;
    const isDev = mode === 'development';
    const config: webpack.Configuration =  {
        mode,
        entry: path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: path.output,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? buildDevServer(options) : undefined,
        resolve: buildResolvers(),
        module: {
            rules: buildLoaders(),
        },
        plugins: buildPlugins(options),
    };

    return config;
}