import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PrivateRoute from './components/routes/PrivateRoute';
import AddService from './components/AddService/AddService';
import AllServices from './components/AllServices/AllServices';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:3000/services')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addService",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
        loader: ()=>fetch('http://localhost:3000/services')
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
