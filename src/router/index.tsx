import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import lazyLoad from './lazyLoad';
import type { RouteObject } from 'react-router-dom';
import LayoutComponent from '@/pages/Layout';
const HomePage = lazy(() => import('@/pages/Home'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: lazyLoad(HomePage)
      }
    ]
  }
];
const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_URL
});
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
