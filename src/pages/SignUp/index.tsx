import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Form, SignUpContainer } from './styles'

const signUpFormSchema = z
  .object({
    email: z
      .string()
      .nonempty({ message: 'O e-mail é obrigatório' })
      .email({ message: 'Digite um e-mail válido.' }),
    password: z
      .string()
      .nonempty({ message: 'A senha é obrigatória' })
      .min(6, { message: 'A senha deve conter no mínimo 6 caracteres.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não conferem.',
    path: ['confirmPassword'],
  })

type SignUpFormInputsType = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const { handleSignUp, isLoading } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputsType>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onSubmit',
  })

  function handleSignUpFormSubmit(data: SignUpFormInputsType) {
    handleSignUp(data.email, data.password)
  }

  return (
    <SignUpContainer>
      <Header subtitle="Crie sua conta!" />

      <Form onSubmit={handleSubmit(handleSignUpFormSubmit)}>
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

        <div>
          <label htmlFor="confirm-password">Confirmar senha</label>
          <Input
            icon={<Lock />}
            type="password"
            id="confirm-password"
            placeholder="Confirme sua senha"
            register={register}
            registerName="confirmPassword"
          />
          {errors.confirmPassword && (
            <small>{errors.confirmPassword?.message}</small>
          )}
        </div>

        <Button type="submit" isLoading={isLoading}>
          Cadastrar
        </Button>

        <span>
          Já possui uma conta? <Link to="/signin">Fazer Login</Link>.
        </span>
      </Form>
    </SignUpContainer>
  )
}
