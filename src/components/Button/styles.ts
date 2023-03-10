import styled from 'styled-components'

export const StyledButton = styled.button`
  background: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 4px;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['blue-600']};
  }
`
