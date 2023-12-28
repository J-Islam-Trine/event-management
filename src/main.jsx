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
import Event from './pages/events';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout></DefaultLayout>,
    children: [
      {
        element: <HomePage />,
        loader: async function () {
            const data = await fetch('https://eoim98emx6orr0t.m.pipedream.net');
            const datajson = await data.json()
            return datajson;
        },
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
      },
      {
        element: <Event />,
        path: '/events/:eventName',
        loader: async function({params})
        {
         const data = await fetch('https://eoim98emx6orr0t.m.pipedream.net')
         const datajson = await data.json();
         const eventData = datajson.filter((item) => item.event_code == params.eventName);
         return eventData[0];
        }
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
