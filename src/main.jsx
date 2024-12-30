import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateCoffee from './Components/CreateCoffee.jsx';
import Home from './Components/Home.jsx';
import Details from './Components/Details.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/addCoffee",
        element: <CreateCoffee/>
      },

      {
        path: "/details/:id",
        element: <Details/>,
        loader: ({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      
      {
        path: "/update/:id",
        element: <UpdateCoffee/>,
        loader: ({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
