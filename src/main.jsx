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
import SingleService from './components/SingleService/SingleService';
import Booking from './components/Booking/Booking';
import ManageService from './components/ManageService/ManageService';
import UpdateService from './components/UpdateService/UpdateService';
import BookedService from './components/BookedService/BookedService';
import ServiceToDo from './components/ServiceToDo/ServiceToDo';
import { HelmetProvider } from 'react-helmet-async';

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
      },
      {
        path: "/singleService/:id",
        element: <PrivateRoute><SingleService></SingleService></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: "/booking/:id",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: "/manageService",
        element: <PrivateRoute><ManageService></ManageService></PrivateRoute>,
        loader: ()=>fetch('http://localhost:3000/services')
      },
      {
        path: "/updateService/:id",
        element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: "/bookedService",
        element: <PrivateRoute><BookedService></BookedService></PrivateRoute>,
        loader: ()=>fetch('http://localhost:3000/bookings')
      },
      {
        path: "/serviceToDo",
        element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>,
        loader: ()=>fetch('http://localhost:3000/bookings')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
      
    </AuthProvider>
  </React.StrictMode>,
)
