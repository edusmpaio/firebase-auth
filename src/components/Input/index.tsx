import { InputHTMLAttributes, ReactNode } from 'react'

import { InputWrapper, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
}

export function Input({ icon, ...rest }: InputProps) {
  return (
    <InputWrapper>
      {icon}

      <StyledInput {...rest} />
    </InputWrapper>
  )
}
