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
import ProtectedRoute from '../auth/ProtectedRoute';

import Payment from '../pages/Payment';
import Completed from '../pages/Completed';
import SellCheckout from '../pages/SellCheckout';
import BuyCheckout from '../pages/BuyCheckout';
import BuyPayment from '../pages/BuyPayment';
import SellCompleted from '../pages/SellCompleted';
import BidAskPage from '../pages/BidAskPage';
import AdminProtectedRoute from '../auth/AdminProtectedRoute';

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
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        )
      },
      { path: '/bidask', element: <BidAskPage /> },
      {
        path: '/history',
        element: (
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        )
      },
      {
        path: '/admin',
        element: (
          <AdminProtectedRoute>
            <AdminPage />
          </AdminProtectedRoute>
        )
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
        path: '/sell-checkout/:productId',
        element: <SellCheckout />
      },
      {
        path: '/buy-checkout/:productId',
        element: <BuyCheckout />
      },
      {
        path: '/payment',
        element: <Payment />
      },
      {
        path: '/buy-payment/:productId',
        element: <BuyPayment />
      },

      {
        path: '/completed',
        element: <Completed />
      },

      {
        path: '/sell-completed',
        element: <SellCompleted />
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
