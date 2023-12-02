import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WookieTaxi from './WookieTaxi.jsx';
import GymStudio from './GymStudio.jsx';
import Magic8Ball from './Magic8Ball.jsx';
import "./styles/index.scss";


const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <App/>,
    },

        {
          path: "/Wookie_Taxi",
          element:<WookieTaxi/>
      },

        { 
          path: "/Gym_Studio",
          element: <GymStudio/> 
      },
      {
        path: "/Magic_8_Ball",
        element: <Magic8Ball/>,
      }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

