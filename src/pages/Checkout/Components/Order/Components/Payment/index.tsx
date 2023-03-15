import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import {
  PaymentContainer,
  PaymentButtonsContainer,
  PaymentButton,
} from './styles';
import { BasicHeader } from '../../styles';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export function Payment() {
  const { register } = useFormContext();
  const [buttonChecked, setButtonChecked] = useState('credit card');

  function handleChange(payment: string) {
    setButtonChecked(payment);
  }

  return (
    <PaymentContainer>
      <BasicHeader variantColor="purple">
        <CurrencyDollar />
        <div>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </p>
        </div>
      </BasicHeader>
      <PaymentButtonsContainer>
        <PaymentButton
          htmlFor="credit card"
          checked={buttonChecked === 'credit card'}
        >
          <CreditCard size={22} />
          <p>Cartão de Crédito</p>
          <input
            type="radio"
            id="credit card"
            value="credit card"
            {...register('payment')}
            name="payment"
            onChange={() => handleChange('credit card')}
          />
        </PaymentButton>

        <PaymentButton
          htmlFor="debit card"
          checked={buttonChecked === 'debit card'}
        >
          <Bank size={22} />
          <p>Cartão de Débito</p>
          <input
            type="radio"
            id="debit card"
            value="debit card"
            {...register('payment')}
            onChange={() => handleChange('debit card')}
            name="payment"
          />
        </PaymentButton>

        <PaymentButton htmlFor="money" checked={buttonChecked === 'money'}>
          <Money size={22} />
          <p>Dinheiro</p>
          <input
            type="radio"
            id="money"
            value="money"
            {...register('payment')}
            onChange={() => handleChange('money')}
            name="payment"
          />
        </PaymentButton>
      </PaymentButtonsContainer>
    </PaymentContainer>
  );
}
