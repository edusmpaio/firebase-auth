import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { router } from './routes'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

      <ToastContainer />
    </ThemeProvider>
  )
}
