import { ButtonHTMLAttributes } from 'react'
import { CircleNotch } from '@phosphor-icons/react'
import { StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean
}

export function Button({ isLoading, children, ...rest }: ButtonProps) {
  return (
    <StyledButton disabled={isLoading} {...rest}>
      {isLoading ? <CircleNotch size={24} /> : children}
    </StyledButton>
  )
}
