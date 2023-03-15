import { createContext, ReactNode, useEffect, useState } from 'react'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'

import { auth } from '../services/firebase'
import { Loader } from '../components/Loader'

interface AuthContextType {
  handleSignUp: (email: string, password: string) => void
  handleSignIn: (email: string, password: string) => void
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
        console.log(auth.currentUser)
        const storageToken = localStorage.getItem('@AuthFirebase:token')
        const storageUser = localStorage.getItem('@AuthFirebase:user')

        if (storageUser && storageToken) {
          setCurrentUser(JSON.parse(storageUser))
        }

        setIsPageLoading(false)
      }
    })

    return subscriber
  }, [])

  function setCurrentUserAndSaveOnLocalStorage(user: User, token: string) {
    setCurrentUser(user)
    localStorage.setItem('@AuthFirebase:token', token)
    localStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
  }

  async function handleSignUp(email: string, password: string) {
    setIsAuthLoading(true)

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const user = response.user
      const accessToken = await user.getIdToken()

      setCurrentUserAndSaveOnLocalStorage(user, accessToken)
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
      const accessToken = await user.getIdToken()

      setCurrentUserAndSaveOnLocalStorage(user, accessToken)
    } catch (error) {
      setIsAuthLoading(false)
      throw error
    }
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
        isAuthLoading,
        currentUser,
        onFirebaseError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
