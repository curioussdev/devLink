import { createBrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Error from './Pages/Error';

import Private from './routes/private';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/login',
    element: <Login/>
  },

  {
    path: '/admin',
    element: <Private> <Admin/> </Private> 
  },

  {
    path: '*',
    element: <Error/>
  }
])

export { router }