import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../layout/Header';
import Checkout from '../pages/Checkout';
import Completed from '../pages/Completed';
import Payment from '../pages/Payment';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
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
