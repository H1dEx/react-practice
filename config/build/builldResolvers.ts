import webpack from "webpack";
import {IConfigParams} from "./interfaces";

export function buildResolvers(options: IConfigParams): webpack.ResolveOptions {
    const {path} = options;
    return (
        {
            extensions: ['.tsx', '.ts', '.js'],
            preferAbsolute: true,
            modules: [path.src, 'node_modules'],
            alias: {},
            mainFiles: ['index']
        }
    )
}