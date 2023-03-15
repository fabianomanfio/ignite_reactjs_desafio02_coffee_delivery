import styled from 'styled-components';

interface PaymentButtonProps {
  checked: boolean;
}

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 13rem;
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
  border-radius: 8px;
  font-size: 1.32rem;
`;

export const PaymentButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PaymentButton = styled.label<PaymentButtonProps>`
  width: 11.18rem;
  height: 3.2rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) =>
    props.checked ? props.theme['purple-light'] : props.theme['base-button']};
  box-shadow: ${(props) =>
    props.checked ? '0 0 0 2px' + props.theme.purple : 'none'};
  color: ${(props) => props.theme.purple};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 0.5rem;
  padding-left: 0.7rem;
  transition: background-color 0.5s ease-in-out;
  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 0.75rem;
    text-transform: uppercase;
  }
  :hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
  :focus {
    background-color: ${(props) => props.theme['purple-light']};
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
  input {
    opacity: 0;
  }
`;
