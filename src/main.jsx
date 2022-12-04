import React from 'react'
import ReactDOM from 'react-dom/client'

import { router } from './App' // importa as rotas criadas no app.jsx
import { RouterProvider } from 'react-router-dom' // permite importar as rotas

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={2500} />
    <RouterProvider router={router}/>
  </React.StrictMode>
)
