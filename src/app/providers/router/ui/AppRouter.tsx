import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/routeConfig/routeConfig";

export const Router = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {Object.values(RouteConfig).map(({element, path}) => (
                        <Route element={element} key={path} path={path}/>
                   ))}
            </Routes>
        </Suspense>
    )
}
