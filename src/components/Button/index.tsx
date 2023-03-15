interface ButtonProps {
  type?: ButtonType;
}

export function Button({type: 'primary'}: ButtonProps) {
  return <ButtonContainer type={type}>Confirmar Pedido</ButtonContainer>
}