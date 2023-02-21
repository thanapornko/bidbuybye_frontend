import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BrandPage from '../pages/BrandPage';
import ProductDetailPage from '../pages/ProductDetailPage';

import Layout from '../layouts/layouts';
import ProductPage from '../pages/ProductPage';

import ProductDetail from '../pages/ProductDetail';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/Profile';
import AdminPage from '../pages/Admin';
import HistoryPage from '../pages/History';

import Checkout from '../pages/Checkout';
import Payment from '../pages/Payment';
import Completed from '../pages/Completed';

const router = createBrowserRouter([
  {
    element: <Layout />,
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
      {
        path: '/product',
        element: <ProductPage />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/payment',
        element: <Payment />
      },
      {
        path: '/completed',
        element: <Completed />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
