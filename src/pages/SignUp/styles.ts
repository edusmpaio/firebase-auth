import styled from 'styled-components'

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 3rem 0;
`

export const Form = styled.form`
  max-width: 400px;
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

  small {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['red-500']};
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
