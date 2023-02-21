import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../layouts/header';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/product',
        element: <ProductPage />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
