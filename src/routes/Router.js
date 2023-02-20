import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../layouts/header';
import HomePage from '../pages/HomePage';
import BrandPage from '../pages/BrandPage';
import ProductDetail from '../pages/ProductDetail';

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
      { path: '/product', element: <ProductDetail /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
