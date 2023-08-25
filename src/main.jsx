import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './Components/CartApp'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { ProductProvider } from "../src/Context/ProductProvider";
import { CartProvider } from "../src/Context/CartProvider";
import './Styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>

      <ProductProvider>
        <CartProvider>

          <CartApp></CartApp>
          <Footer />

        </CartProvider>
      </ProductProvider>

    </React.StrictMode>
  </BrowserRouter>
)
