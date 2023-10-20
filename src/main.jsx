import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root.jsx';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import MyCart from './Pages/MyCart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Provider/AuthProvider';
import ErrorPage from './Pages/Errorpage';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/Products/ProductDetails';
import UpdateProduct from './Pages/UpdateProduct';
import PrivateRoutes from './Routes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('/brand.json')
      },
      {
        path: "/addProduct",
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
        loader: ({params})=> fetch(`https://brand-shop-server-dhvpwtq9r-akashs-projects-91b81bb4.vercel.app/products/${params.id}`)
      },
      {
        path: "/myCart",
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
        loader: ()=>fetch('https://brand-shop-server-dhvpwtq9r-akashs-projects-91b81bb4.vercel.app/myCart')
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
        path: "/products/:brandName",
        element: <Products></Products>,
        loader: ()=>fetch('https://brand-shop-server-dhvpwtq9r-akashs-projects-91b81bb4.vercel.app/products')
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
        loader: ()=>fetch('https://brand-shop-server-dhvpwtq9r-akashs-projects-91b81bb4.vercel.app/products')
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
