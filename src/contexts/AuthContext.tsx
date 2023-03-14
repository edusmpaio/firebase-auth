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
  onFirebaseError: (errorCode: string) => string
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

  function setCurrentUserAndSaveOnLocalStorage(user: User, token: string) {
    setCurrentUser(user)
    localStorage.setItem('@AuthFirebase:token', token)
    localStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
  }

  async function handleSignUp(email: string, password: string) {
    setIsLoading(true)

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
      setIsLoading(false)
      throw error
    }
  }

  async function handleSignIn(email: string, password: string) {
    setIsLoading(true)

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      const user = response.user
      const accessToken = await user.getIdToken()

      setCurrentUserAndSaveOnLocalStorage(user, accessToken)
    } catch (error) {
      setIsLoading(false)
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

  return (
    <AuthContext.Provider
      value={{
        handleSignUp,
        handleSignIn,
        isLoading,
        currentUser,
        onFirebaseError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
