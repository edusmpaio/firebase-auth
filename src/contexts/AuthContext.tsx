import { createContext, ReactNode, useEffect, useState } from 'react'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'
import { auth } from '../services/firebase'

interface AuthContextType {
  handleSignUp: (email: string, password: string) => void
  handleSignIn: (email: string, password: string) => void
  isLoading: boolean
  currentUser: User | null
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadStoredUserInfo = () => {
      const storageToken = localStorage.getItem('@AuthFirebase:token')
      const storageUser = localStorage.getItem('@AuthFirebase:user')

      if (storageUser && storageToken) {
        setCurrentUser(JSON.parse(storageUser))
      }
    }

    loadStoredUserInfo()
  }, [])

  async function handleSignUp(email: string, password: string) {
    setIsLoading(true)

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const user = response.user
      const acessToken = await user.getIdToken()

      setCurrentUser(user)
      localStorage.setItem('@AuthFirebase:token', acessToken)
      localStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSignIn(email: string, password: string) {
    setIsLoading(true)

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      const user = response.user
      const acessToken = await user.getIdToken()

      setCurrentUser(user)
      localStorage.setItem('@AuthFirebase:token', acessToken)
      localStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{ handleSignUp, handleSignIn, isLoading, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
