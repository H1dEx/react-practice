import path from 'path';
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {EnvParams} from "./config/build/interfaces";

const PORT = 3000;

const config = ({port = PORT, mode = 'development'}: EnvParams): webpack.Configuration => buildWebpackConfig({
    mode,
    path: {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    },
    port,
})

export default config;