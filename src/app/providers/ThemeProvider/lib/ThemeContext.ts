import {createContext} from "react";

export enum Themes {
    Light = 'light',
    Dark = 'dark',
}

export interface ThemeContextProps {
    theme?: Themes;
    setTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});


export const THEME_STORAGE_KEY = 'theme';