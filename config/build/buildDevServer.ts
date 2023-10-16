import {IConfigParams} from "./interfaces";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer({port}: IConfigParams): DevServerConfiguration {
    return {
        port,
        open: true,
    }
}