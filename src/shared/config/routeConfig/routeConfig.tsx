import { AboutPage, MainPage } from "@/pages"
import { RouteProps } from "react-router-dom"

export enum AppPagesEnum {
    MAIN = 'main',
    ABOUT = 'about',
}

export const ROUTE_PATH: Record<AppPagesEnum, string> = {
    [AppPagesEnum.MAIN]: '/',
    [AppPagesEnum.ABOUT]: '/about',
}

export const routeConfig: Record<AppPagesEnum, RouteProps> = {
    [AppPagesEnum.MAIN]: {
        path: ROUTE_PATH.main,
        element: <MainPage />,
    },
    [AppPagesEnum.ABOUT]: {
        path: ROUTE_PATH.about,
        element: <AboutPage />,
    }
}