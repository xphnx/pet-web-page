import { RouteProps } from 'react-router-dom';
import { AboutPage, MainPage, Page404 } from '@/pages';

export enum AppPagesEnum {
  MAIN = 'main',
  ABOUT = 'about',
  PAGE_404 = 'page404',
}

export const ROUTE_PATH: Record<AppPagesEnum, string> = {
  [AppPagesEnum.MAIN]: '/',
  [AppPagesEnum.ABOUT]: '/about',
  [AppPagesEnum.PAGE_404]: '*',
};

export const routeConfig: Record<AppPagesEnum, RouteProps> = {
  [AppPagesEnum.MAIN]: {
    path: ROUTE_PATH.main,
    element: <MainPage />,
  },
  [AppPagesEnum.ABOUT]: {
    path: ROUTE_PATH.about,
    element: <AboutPage />,
  },
  [AppPagesEnum.PAGE_404]: {
    path: ROUTE_PATH.page404,
    element: <Page404 />,
  },
};
