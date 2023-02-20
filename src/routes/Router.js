import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../component/Header/header';
import HomePage from '../homePage/HomePage';
import ShopNikePage from '../products/brands/productClothes/CloteNike/shopNikePage/ShopNikePage';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/shopNikePage',
        element: <ShopNikePage />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
