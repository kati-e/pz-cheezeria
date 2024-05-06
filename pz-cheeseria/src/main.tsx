import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.tsx'
import './global.scss'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage.tsx'
import { ShoppingListProvider } from './ShoppingListContext.tsx'

//ROUTING
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  }
])

//MAIN APP
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShoppingListProvider>
      <Header />
        <RouterProvider router={router} />
      <Footer />
    </ShoppingListProvider>
  </React.StrictMode>
)
