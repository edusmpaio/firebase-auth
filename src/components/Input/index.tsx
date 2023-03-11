import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { SignUpFormInputsType } from '../../pages/SignUp'

import { InputWrapper, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  register: UseFormRegister<SignUpFormInputsType>
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
