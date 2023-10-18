import React, {FC, useCallback, useMemo, useState} from "react";
import {THEME_STORAGE_KEY, ThemeContext, Themes} from "./ThemeContext";


export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Themes>(localStorage.getItem(THEME_STORAGE_KEY) as Themes || Themes.Light);

    const handleToggleTheme = useCallback(() => {
        const newTheme = theme === Themes.Dark ? Themes.Light : Themes.Dark;
        setTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }, [setTheme, theme])

    const defaultProps = useMemo(() => ({theme, setTheme: handleToggleTheme}), [theme, handleToggleTheme])

    return (<ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>)
}