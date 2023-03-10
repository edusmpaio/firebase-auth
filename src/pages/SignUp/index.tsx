import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { EnvelopeSimple, Lock } from '@phosphor-icons/react'
import { Form, SignUpContainer } from './styles'

export function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (confirmedPassword !== password) {
      console.log('as senhas não conferem')
      return
    }

    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setIsLoading(false)
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setIsLoading(false)
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <SignUpContainer>
      <Header subtitle="Crie sua conta!" />

      <Form onSubmit={handleSignUp}>
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
