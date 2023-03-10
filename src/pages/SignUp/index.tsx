import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Form, SignUpContainer } from './styles'

export function SignUp() {
  return (
    <SignUpContainer>
      <Header subtitle="Crie sua conta!" />

      <Form>
        <div>
          <label htmlFor="email">Endereço de e-mail</label>
          <Input
            icon={<EnvelopeSimple />}
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            icon={<Lock />}
            type="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </div>

        <div>
          <label htmlFor="password">Confirmar senha</label>
          <Input
            icon={<Lock />}
            type="password"
            id="password"
            placeholder="Confirme sua senha"
          />
        </div>

        <Button type="submit">Cadastrar</Button>

        <span>
          Já possui uma conta? <Link to="/signin">Fazer Login</Link>.
        </span>
      </Form>
    </SignUpContainer>
  )
}
