import styled from 'styled-components';

export const InfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 34rem;
  margin-top: 2rem;
`;

export const InfoText = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  /* width: 36.75rem; */

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    margin: 0;
  }
  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const InfoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 35.43rem;
  height: 5.25rem;
  margin-top: 1.25rem;

  div {
    margin-bottom: 0.25rem;
  }
`;

export const ItemShoppingCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;

    background-color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const ItemTimer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;

    background-color: ${(props) => props.theme.yellow};
  }
`;

export const ItemPackege = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;

    background-color: ${(props) => props.theme['base-text']};
  }
`;

export const ItemCoffee = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;

    background-color: ${(props) => props.theme.purple};
  }
`;
