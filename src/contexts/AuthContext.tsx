import { createContext, ReactNode, useEffect, useState } from 'react'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'

import { auth } from '../services/firebase'
import { Loader } from '../components/Loader'

interface AuthContextType {
  handleSignUp: (email: string, password: string) => void
  handleSignIn: (email: string, password: string) => void
  handleSignOut: () => void
  isAuthLoading: boolean
  currentUser: User | null
  onFirebaseError: (errorCode: string) => string
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isAuthLoading, setIsAuthLoading] = useState(false)

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(auth.currentUser)
      }
      setIsPageLoading(false)
    })

    return subscriber
  }, [])

  async function handleSignUp(email: string, password: string) {
    setIsAuthLoading(true)

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const user = response.user

      setCurrentUser(user)
    } catch (error) {
      setIsAuthLoading(false)
      throw error
    }
  }

  async function handleSignIn(email: string, password: string) {
    setIsAuthLoading(true)

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      const user = response.user

      setCurrentUser(user)
    } catch (error) {
      setIsAuthLoading(false)
      throw error
    }
  }

  async function handleSignOut() {
    signOut(auth)
      .then(() => {
        setCurrentUser(null)
      })
      .catch((error) => {
        throw error
      })
  }

  function onFirebaseError(errorCode: string) {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'Usuário não encontrado.'
      case 'auth/wrong-password':
        return 'Senha incorreta.'
      case 'auth/too-many-requests':
        return 'Acesso temporariamente desativado devido a muitas tentativas de login malsucedidas.'
      case 'auth/email-already-in-use':
        return 'Esse e-mail já está sendo utilizado.'
      default:
        return 'Ocorreu um erro inesperado. Tente novamente.'
    }
  }

  if (isPageLoading) {
    return <Loader />
  }

  return (
    <AuthContext.Provider
      value={{
        handleSignUp,
        handleSignIn,
        handleSignOut,
        isAuthLoading,
        currentUser,
        onFirebaseError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
