import React, { Suspense } from "react";
import './index.sass';
import {Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";

export const App = () => {
    return (<div className="apps">
        <div>
            <Link to="/">Main</Link>&nbsp;

            <Link to="/about">About</Link>
        </div>
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageLazy/>} />
                <Route path={'/'} element={<MainPageLazy/>} />
            </Routes>
        </Suspense>
    </div>)
}