import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './Components/CartApp'
import { BrowserRouter  } from 'react-router-dom'
import { Footer } from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>

      <CartApp></CartApp>
      <Footer/>
    </React.StrictMode>
  </BrowserRouter>
)
