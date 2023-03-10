import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Form, SignInContainer } from './styles'

export function SignIn() {
  return (
    <SignInContainer>
      <Header subtitle="Faça login e comece a usar!" />

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

        <Button type="submit">Entrar</Button>

        <span>
          Não possui uma conta? <a href="#">Registre-se</a>.
        </span>
      </Form>
    </SignInContainer>
  )
}
