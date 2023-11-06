import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import RouterIndex from './Router/RouterIndex.jsx'
import Authcontext from './Auth/Authcontext.jsx'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authcontext>
      <RouterProvider router={RouterIndex}>
        <App></App>
      </RouterProvider>
    </Authcontext>
    <Toaster />

  </React.StrictMode>,
)
