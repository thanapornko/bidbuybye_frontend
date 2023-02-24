import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../layouts/header';
import HomePage from '../pages/HomePage';
import BrandPage from '../pages/BrandPage';
import ProductDetail from '../pages/ProductDetail';

import Checkout from '../pages/Checkout';
import Payment from '../pages/Payment';
import Completed from '../pages/Completed';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/brand',
        element: <BrandPage />
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
