import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Form = styled.form`
  max-width: 366px;
  width: 100%;

  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 1rem;
  }

  label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  span {
    text-align: center;
    color: ${(props) => props.theme['gray-200']};
    font-size: 0.875rem;
    margin-top: 2rem;

    a {
      color: ${(props) => props.theme['blue-500']};
      font-weight: 500;
      text-decoration: none;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`

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

export const Input = styled.input`
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
