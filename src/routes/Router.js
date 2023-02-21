import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import Layout from '../layouts/layouts';
import ProductPage from '../pages/ProductPage';

import ProductDetail from '../pages/ProductDetail';

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
        path: '/product',
        element: <ProductPage />
      },
      { path: '/product', element: <ProductDetail /> },
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
