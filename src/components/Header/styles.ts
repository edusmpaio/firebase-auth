import styled from 'styled-components'

export const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 2.625rem;

  img {
    height: 64px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
  }

  span {
    color: ${(props) => props.theme['gray-400']};
    font-size: 1rem;
  }
`
