import { createBrowserRouter } from 'react-router-dom'

import { RequireAuth } from './RequireAuth'

import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
])
