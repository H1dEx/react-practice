import React from "react";
import './styles/index.sass';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import {Router} from "app/providers/router";


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('apps', {}, [theme])}>
        <div>
            <Link to="/">Main</Link>&nbsp;

            <Link to="/about">About</Link>&nbsp;

            <button onClick={toggleTheme}>Switch theme</button>
        </div>
        <Router/>
    </div>)
}