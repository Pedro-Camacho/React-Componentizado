import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Sobre from './pages/Sobre.jsx'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/sobre",
    element: <Sobre />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>,
)
