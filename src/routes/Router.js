import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../layouts/header';
import HomePage from '../pages/HomePage';
import BrandPage from '../pages/BrandPage';
import ProductDetailPage from '../pages/ProductDetailPage';

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
      { path: '/product', element: <ProductDetailPage /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
