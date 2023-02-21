import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../layouts/header';
import HomePage from '../pages/HomePage';
import BrandPage from '../pages/BrandPage';
import Layout from '../layouts/layouts';

const router = createBrowserRouter([
  {
    element: <Layout />,
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
