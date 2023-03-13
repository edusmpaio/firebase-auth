import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { InputWrapper, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  register: UseFormRegister<any>
  registerName: 'email' | 'password' | 'confirmPassword'
}

export function Input({ icon, register, registerName, ...rest }: InputProps) {
  return (
    <InputWrapper>
      {icon}

      <StyledInput {...register(registerName)} {...rest} />
    </InputWrapper>
  )
}
