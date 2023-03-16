import { HeaderContainer } from './styles'

interface HeaderProps {
  subtitle: string
}

export function Header({ subtitle }: HeaderProps) {
  return (
    <HeaderContainer>
      <img src="/firebase-logo.svg" alt="Logo do Firebase" />
      <h2>Firebase Auth</h2>
      <span>{subtitle}</span>
    </HeaderContainer>
  )
}
