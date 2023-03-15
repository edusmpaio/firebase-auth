import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-800']};
  padding: 0 1.25rem;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.25rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    height: 2.375rem; // 38px
  }

  strong {
    font-size: 1.625rem; // 32px
  }
`

export const SignOutButton = styled.button`
  background: ${(props) => props.theme['red-700']};
  border: none;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['red-800']};
  }
`

export const MainContainer = styled.main`
  min-height: calc(100vh - 78px);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    color: ${(props) => props.theme['gray-400']};
    opacity: 0.7;

    strong {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.125rem;
    }
  }
`
