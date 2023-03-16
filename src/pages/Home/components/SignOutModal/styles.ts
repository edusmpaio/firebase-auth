import styled, { keyframes } from 'styled-components'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

const overlayShow = keyframes`
  from {
    opacity: 0;
  }

  to { 
    opacity: 1;
  }
`

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);

  animation: ${overlayShow} 0.2s ease;
`

export const Content = styled(AlertDialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 446px;

  background: ${(props) => props.theme['gray-800']};
  padding: 3.5rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  border-radius: 6px;

  animation: ${contentShow} 0.2s ease;

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 556px) {
      flex-direction: column-reverse;
    }
  }
`

interface DialogButtonProps {
  variant: 'cancel' | 'confirm'
}

export const DialogButton = styled.button<DialogButtonProps>`
  background: ${({ variant, theme }) =>
    variant === 'cancel' ? theme['gray-700'] : theme['red-700']};
  color: ${({ variant, theme }) =>
    variant === 'cancel' ? theme['gray-200'] : theme.white};

  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ variant, theme }) =>
      variant === 'cancel' ? theme['gray-600'] : theme['red-800']};
  }
`
