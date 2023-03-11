import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Form, SignUpContainer } from './styles'

export function SignUp() {
  const { handleSignUp, isLoading } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleSignUp(email, password)
  }

  return (
    <SignUpContainer>
      <Header subtitle="Crie sua conta!" />

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Endereço de e-mail</label>
          <Input
            icon={<EnvelopeSimple />}
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            icon={<Lock />}
            type="password"
            id="password"
            placeholder="Digite sua senha"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <label htmlFor="confirm-password">Confirmar senha</label>
          <Input
            icon={<Lock />}
            type="password"
            id="confirm-password"
            placeholder="Confirme sua senha"
            required
            onChange={(e) => setConfirmedPassword(e.target.value)}
            value={confirmedPassword}
          />
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
