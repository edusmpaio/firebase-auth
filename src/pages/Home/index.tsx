import { Fire, SignOut } from '@phosphor-icons/react'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { SignOutModal } from './components/SignOutModal'

import {
  HeaderContainer,
  HeaderContent,
  Logo,
  MainContainer,
  SignOutButton,
} from './styles'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo>
            <img src="/firebase-logo.svg" alt="Logo Firebase" />
            <strong>Dashboard</strong>
          </Logo>

          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <SignOutButton>
                <SignOut fill="#fff" />
              </SignOutButton>
            </AlertDialog.Trigger>

            <SignOutModal />
          </AlertDialog.Root>
        </HeaderContent>
      </HeaderContainer>

      <MainContainer>
        <div>
          <Fire />
          <strong>Placeholder</strong>
          <p>Ops! Não há nada para ver aqui no momento</p>
        </div>
      </MainContainer>
    </>
  )
}
