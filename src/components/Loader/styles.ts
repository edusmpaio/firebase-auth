import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${spin} 0.7s linear infinite;
    color: ${(props) => props.theme['blue-500']};
  }
`
