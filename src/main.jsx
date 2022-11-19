import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './App' // importa as rotas criadas no app.jsx
import { RouterProvider } from 'react-router-dom' // permite importar as rotas



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
