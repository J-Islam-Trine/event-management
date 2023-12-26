import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

//css file
import './index.css'


//layouts
import DefaultLayout from './layouts/default'


//routes
import HomePage from './pages/home';
import SignupPage from './pages/signup';
import SigninPage from './pages/signinPage';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout></DefaultLayout>,
    children: [
      {
        element: <HomePage />,
        index: true
      },
      {
        element: <SignupPage />,
        path: '/register'
  
      },
      {
        element: <SigninPage />,
        path: '/login'
      },
      {
        element: <Dashboard />,
        path: '/dashboard'
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
