export type Mode = 'development' | 'production';

export interface Path {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface IConfigParams {
    mode: Mode;
    path: Path;
    port: number;
    isDev: boolean;
}

export interface EnvParams {
    mode?: Mode;
    port?: number
}