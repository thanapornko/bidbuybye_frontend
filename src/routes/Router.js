import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../component/Header/header';
import HomePage from '../homePage/HomePage';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
