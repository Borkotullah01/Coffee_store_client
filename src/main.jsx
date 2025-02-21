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
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import SignIn from './Components/SignIn.jsx';
import Users from './Components/Users.jsx';

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
        loader: ({params})=>fetch(`https://coffee-store-server-virid-nine.vercel.app/coffees/${params.id}`)
      },
      
      {
        path: "/update/:id",
        element: <UpdateCoffee/>,
        loader: ({params})=>fetch(`https://coffee-store-server-virid-nine.vercel.app/coffees/${params.id}`)
      },

      {
        path: "/signup",
        element: <SignUp/>,
      },

      {
        path: "/signin",
        element: <SignIn/>,
      },

      {
        path: "/users",
        element: <Users/>,
        loader:()=>fetch("https://coffee-store-server-virid-nine.vercel.app/users")
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
