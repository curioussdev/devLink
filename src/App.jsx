import { createBrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Error from './Pages/Error';

import Private from './routes/private';
import Networks from './Pages/Networks';

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
    path: '/admin/social',
    element: <Private> <Networks /> </Private>
  },

  {
    path: '*',
    element: <Error/>
  }
])

export { router }