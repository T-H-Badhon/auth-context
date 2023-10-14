import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login';
import Resister from './components/Resister';
import Orders from './components/Orders';
import Profile from './components/Profile';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './components/Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/resister',
        element: <Resister></Resister>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute> ,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute> ,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
