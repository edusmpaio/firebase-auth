import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { FirebaseError } from 'firebase/app'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Link, Navigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Form, SignInContainer } from './styles'
import { toast } from 'react-toastify'

const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'O e-mail é obrigatório' })
    .email({ message: 'Digite um e-mail válido.' }),
  password: z
    .string()
    .nonempty({ message: 'A senha é obrigatória' })
    .min(6, { message: 'A senha deve conter no mínimo 6 caracteres.' }),
})

type SignInFormInputsType = z.infer<typeof signInFormSchema>

export function SignIn() {
  const { handleSignIn, isAuthLoading, currentUser, onFirebaseError } =
    useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputsType>({
    resolver: zodResolver(signInFormSchema),
    shouldUnregister: false,
  })

  async function handleSignInFormSubmit(data: SignInFormInputsType) {
    try {
      await handleSignIn(data.email, data.password)
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = onFirebaseError(error.code)
        toast.error(errorMessage, { autoClose: 3000, theme: 'colored' })
      }
    }
  }

  if (currentUser) {
    return <Navigate to="/" replace />
  }

  return (
    <SignInContainer>
      <Header subtitle="Faça login e comece a usar!" />

      <Form onSubmit={handleSubmit(handleSignInFormSubmit)}>
        <div>
          <label htmlFor="email">Endereço de e-mail</label>
          <Input
            icon={<EnvelopeSimple />}
            type="text"
            id="email"
            placeholder="Digite seu e-mail"
            register={register}
            registerName="email"
          />
          {errors.email && <small>{errors.email?.message}</small>}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            icon={<Lock />}
            type="password"
            id="password"
            placeholder="Digite sua senha"
            register={register}
            registerName="password"
          />
          {errors.password && <small>{errors.password?.message}</small>}
        </div>

        <Button type="submit" isLoading={isAuthLoading}>
          Entrar
        </Button>

        <span>
          Não possui uma conta? <Link to="/signup">Registre-se</Link>.
        </span>
      </Form>
    </SignInContainer>
  )
}
