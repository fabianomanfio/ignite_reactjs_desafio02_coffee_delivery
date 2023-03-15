import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  background-color: ${(props) => props.theme.background};
  position: fixed;
  height: 6.5rem;
  width: 100%;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    div:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 6px;
      gap: 0.5rem;

      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme.purple};

      span {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`;

export const NavBarLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`;
