import firebaseLogo from '../../assets/firebase-logo.svg'
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
            <img src={firebaseLogo} alt="Logo Firebase" />
            <strong>Dashboard</strong>
          </Logo>

          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <SignOutButton>
                <SignOut size={24} fill="#fff" />
              </SignOutButton>
            </AlertDialog.Trigger>

            <SignOutModal />
          </AlertDialog.Root>
        </HeaderContent>
      </HeaderContainer>

      <MainContainer>
        <div>
          <Fire size={98} />
          <strong>Placeholder</strong>
          <p>Ops! Não há nada para ver aqui no momento</p>
        </div>
      </MainContainer>
    </>
  )
}
