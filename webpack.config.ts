import path from 'path';
import webpack from "webpack";
import {getBuildConfig} from "./config/build/getBuildConfig";

const config: webpack.Configuration = getBuildConfig({
    mode: 'development',
    path: {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
})

export default config;