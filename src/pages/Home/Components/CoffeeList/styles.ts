import styled from 'styled-components';

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  justify-content: space-between;
`;

export const CoffeeListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const CoffeeFilter = styled.div`
  display: flex;
  gap: 0.5rem;
`;

interface CoffeeFilterButtonProps {
  isActive: boolean;
}

export const CoffeeFilterButton = styled.button<CoffeeFilterButtonProps>`
  border-radius: 2rem;
  padding: 0.35rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: ${(props) =>
    props.isActive ? props.theme.yellow : props.theme.background};
  color: ${(props) => props.theme['yellow-dark']};
  border: 2px solid ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
`;

export const CoffeeListCards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 2rem;
  padding: 4rem 0 8rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1rem;
  text-align: center;

  img {
    /* position: relative; */
    weight: 7.5rem;
    height: 7.5rem;
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    text-transform: capitalize;
  }
`;

export const Tag = styled.span`
  border-radius: 2rem;
  padding: 0.35rem 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
  /* position: relative; */
  margin-bottom: 1rem;
`;

export const Description = styled.span`
  font-size: 0.875rem;
  margin: 0.5rem 0 2rem 0;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
`;

export const BuyContainer = styled.div`
  width: 100%;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['base-text']};
    margin: 0 1.5rem 0 0.5rem;
  }
`;
