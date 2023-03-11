import { createContext, ReactNode, useState } from 'react'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../services/firebase'

interface AuthContextType {
  handleSignUp: (email: string, password: string) => void
  handleSignIn: (email: string, password: string) => void
  isLoading: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false)

  function handleSignUp(email: string, password: string) {
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  function handleSignIn(email: string, password: string) {
    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <AuthContext.Provider value={{ handleSignUp, handleSignIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
