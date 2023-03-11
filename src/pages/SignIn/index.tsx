import { Link } from 'react-router-dom'

import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Form, SignInContainer } from './styles'

export function SignIn() {
  const { handleSignIn, isLoading } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleSignIn(email, password)
  }

  return (
    <SignInContainer>
      <Header subtitle="Faça login e comece a usar!" />

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Endereço de e-mail</label>
          <Input
            icon={<EnvelopeSimple />}
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <Button type="submit" isLoading={isLoading}>
          Entrar
        </Button>

        <span>
          Não possui uma conta? <Link to="/signup">Registre-se</Link>.
        </span>
      </Form>
    </SignInContainer>
  )
}
