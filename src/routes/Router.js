import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../layouts/header';
import HomePage from '../pages/HomePage';
import BrandPage from '../pages/BrandPage';
import ProductDetail from '../pages/ProductDetail';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/Profile';
import AdminPage from '../pages/Admin';
import HistoryPage from '../pages/History';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/history',
        element: <HistoryPage />
      },
      {
        path: '/admin',
        element: <AdminPage />
      },
      {
        path: '/brand',
        element: <BrandPage />
      },
      { path: '/product', element: <ProductDetail /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
