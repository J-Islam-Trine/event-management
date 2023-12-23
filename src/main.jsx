import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";


//css file
import './index.css'


//layouts
import DefaultLayout from './layouts/default'


//routes
import HomePage from './pages/home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout></DefaultLayout>,
    children: [
      {
        element: <HomePage />,
        index: true
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
