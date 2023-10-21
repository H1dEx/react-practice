import {RouteProps} from "react-router-dom";
import {MainPageLazy} from "pages/MainPage";
import {AboutPageLazy} from "pages/AboutPage";

export enum AppRoutes {
    Main = 'main',
    About = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.main,
        element: <MainPageLazy/>
    },
    [AppRoutes.About]: {
        path: RoutePath.about,
        element: <AboutPageLazy/>
    }
}
