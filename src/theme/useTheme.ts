import {useContext} from "react";
import {ThemeContext, Themes} from "./ThemeContext";

interface UseTheme {
    toggleTheme: () => void;
    theme: Themes;
}

export function useTheme(): UseTheme {
    const {theme, setTheme} = useContext(ThemeContext);

    return {
        theme,
        toggleTheme: setTheme,
    }
}