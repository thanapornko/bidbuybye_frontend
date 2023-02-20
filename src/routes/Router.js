import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../layouts/header';
import HomePage from '../pages/HomePage';
import BrandPage from '../pages/BrandPage';

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
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
