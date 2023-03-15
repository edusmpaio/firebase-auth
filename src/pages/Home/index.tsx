import firebaseLogo from '../../assets/firebase-logo.svg'
import { Fire, SignOut } from '@phosphor-icons/react'
import { HeaderContainer, HeaderContent, Logo, MainContainer } from './styles'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo>
            <img src={firebaseLogo} alt="Logo Firebase" />
            <strong>Dashboard</strong>
          </Logo>

          <button>
            <SignOut size={24} fill="#fff" />
          </button>
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
