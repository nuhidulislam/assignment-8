import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import ProductsCard from './Components/ProductsCard.jsx';
import DynamicCard from './Components/DynamicCard.jsx';
import CardDetails from './Components/CardDetails.jsx';
import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: ()=> fetch('../categories.json'),
        children:[
          {
            path:'/',
            element:<ProductsCard></ProductsCard> ,
            loader: ()=> fetch('../allProducts.json'),
          },
          {
            path:'/category/:category',
            element:<ProductsCard></ProductsCard>,
            loader: ()=> fetch('../allProducts.json'),
          }
        ]
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>,
        loader: ()=> fetch('../allProducts.json'),
      },
      {
        path:'/Dashboard',
        element:<Dashboard></Dashboard>,
        loader: ()=> fetch('../allProducts.json'),
      },
      {
        path: '/AboutUs',
        element:<AboutUs></AboutUs>,
        loader: ()=> fetch('../allProducts.json'),
      },
      {
        path: '/card/:id',
        element:<CardDetails></CardDetails>,
        loader: ()=> fetch('../allProducts.json'),
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
