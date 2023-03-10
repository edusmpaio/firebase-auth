import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledButton = styled.button`
  background: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 4px;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: inherit;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['blue-600']};
  }

  svg {
    animation: ${spin} 1s linear infinite;
  }
`
