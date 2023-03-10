import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;

  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-400']};
    position: absolute;
    top: 0.625rem;
    left: 0.75rem;
  }
`

export const StyledInput = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 0.875rem;
  border: 2px solid ${(props) => props.theme['gray-800']};
  border-radius: 4px;
  padding: 0.75rem 1rem 0.75rem 3rem;

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme['blue-500']};
  }
`
