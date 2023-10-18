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
        element: <AddProduct></AddProduct>
      },
      {
        path: "/updateProduct",
        element: <UpdateProduct></UpdateProduct>
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: ()=>fetch('http://localhost:4000/myCart')
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
        loader: ()=>fetch('http://localhost:4000/products')
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ()=>fetch('http://localhost:4000/products')
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
