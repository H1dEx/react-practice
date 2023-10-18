import React, {Suspense} from "react";
import './styles/index.sass';
import {Route, Routes} from "react-router-dom";
import {Link} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {useTheme} from "./theme/useTheme";


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (<div className={`apps ${theme}`}>
        <div>
            <Link to="/">Main</Link>&nbsp;

            <Link to="/about">About</Link>&nbsp;

            <button onClick={toggleTheme}>Switch theme</button>
        </div>
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageLazy/>}/>
                <Route path={'/'} element={<MainPageLazy/>}/>
            </Routes>
        </Suspense>
    </div>)
}