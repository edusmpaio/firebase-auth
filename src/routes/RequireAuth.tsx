import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export function RequireAuth() {
  const { currentUser } = useContext(AuthContext)

  return currentUser ? <Outlet /> : <Navigate to="/signin" />
}
