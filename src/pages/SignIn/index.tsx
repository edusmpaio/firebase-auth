import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Form, Input, InputWrapper, SignInContainer } from './styles'

export function SignIn() {
  return (
    <SignInContainer>
      <Header subtitle="Faça login e comece a usar!" />

      <Form>
        <div>
          <label htmlFor="email">Endereço de e-mail</label>
          <InputWrapper>
            <EnvelopeSimple />
            <Input type="email" id="email" placeholder="Digite seu e-mail" />
          </InputWrapper>
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <InputWrapper>
            <Lock size={24} />
            <Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </InputWrapper>
        </div>

        <Button type="submit">Entrar</Button>

        <span>
          Não possui uma conta? <a href="#">Registre-se</a>.
        </span>
      </Form>
    </SignInContainer>
  )
}
