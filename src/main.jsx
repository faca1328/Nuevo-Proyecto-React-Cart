import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './Components/CartApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <CartApp></CartApp>
  </React.StrictMode>
  </BrowserRouter>
)
