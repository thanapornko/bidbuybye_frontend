import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import Layout from '../layouts/layouts';
import ProductPage from '../pages/ProductPage';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ProfilePage from '../pages/Profile';
import AdminPage from '../pages/Admin';
import HistoryPage from '../pages/History';
import OrderStatusPage from '../pages/OrderStatus';

import ProductDetailPage from '../pages/ProductDetailPage';
import RedirectAuth from '../auth/RedirectAuth';

import Checkout from '../pages/Checkout';
import Payment from '../pages/Payment';
import Completed from '../pages/Completed';

const router = createBrowserRouter([
  // {
  //   path: '/checkout',
  //   element: <Checkout />
  // },
  // {
  //   path: '/payment',
  //   element: <Payment />
  // },
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
        path: '/product',
        element: <ProductPage />
      },
      {
        path: '/orderstatus',
        element: <OrderStatusPage />
      },
      {
        path: '/checkout',
        element: (
          <RedirectAuth>
            <Checkout />
          </RedirectAuth>
        )
      },
      {
        path: '/payment',
        element: <Payment />
      },

      {
        path: '/completed',
        element: <Completed />
      },
      {
        path: '/product/detail/:productId',
        element: <ProductDetailPage />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
