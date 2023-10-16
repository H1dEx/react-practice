export type Mode = 'development' | 'production';

export interface Path {
    entry: string;
    output: string;
    html: string;
}

export interface IConfigParams {
    mode: Mode;
    path: Path;
    port: number;
}

export interface EnvParams {
    mode?: Mode;
    port?: number
}