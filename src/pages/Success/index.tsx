import {
  IllustrationContainer,
  ItemIconLocal,
  ItemIconPayment,
  ItemIconTime,
  ItemText,
  OrderInfoContainer,
  OrderInfoContent,
  OrderInfoItem,
  SuccessBody,
  SuccessContainer,
  SuccessHeader,
} from './styles';

import SuccessIllustration from '../../assets/SuccessIllustration.svg';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useContext, useState } from 'react';
import { OrderContext } from '../../contexts/OrderContext';

export function Success() {
  const { address } = useContext(OrderContext);
  let paymentType = '';
  // const address = {s
  //   street: 'Rua Borges de Medeiros',
  //   number: '218',
  //   neighborhood: 'Centro',
  //   city: 'Porto Alegre',
  //   state: 'RS',
  // };

  if (address?.payment === 'credit card') {
    paymentType = 'Cartão de Crédito';
  } else if (address?.payment === 'debit card') {
    paymentType = 'Cartão de Débito';
  } else if (address?.payment === 'money') {
    paymentType = 'Dinheiro';
  }

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <SuccessBody>
        <OrderInfoContainer>
          <OrderInfoContent>
            <OrderInfoItem>
              <ItemIconLocal>
                <MapPin size={16} weight="fill" />
              </ItemIconLocal>
              <ItemText>
                <p>
                  Entrega em{' '}
                  <b>
                    {address?.street}, {address?.number}
                  </b>
                </p>
                <b>
                  {address?.neighborhood} - {address?.city}, {address?.state}
                </b>
              </ItemText>
            </OrderInfoItem>
            <OrderInfoItem>
              <ItemIconTime>
                <Timer size={16} weight="fill" />
              </ItemIconTime>
              <ItemText>
                <p>Previsão de entrega</p>
                <p>
                  <b>20 min - 30 min</b>
                </p>
              </ItemText>
            </OrderInfoItem>
            <OrderInfoItem>
              <ItemIconPayment>
                <CurrencyDollar size={16} weight="fill" />
              </ItemIconPayment>
              <ItemText>
                <p>Pagamento na entrega</p>
                <p>
                  <b>{paymentType}</b>
                </p>
              </ItemText>
            </OrderInfoItem>
          </OrderInfoContent>
        </OrderInfoContainer>
        <IllustrationContainer src={SuccessIllustration} />
      </SuccessBody>
    </SuccessContainer>
  );
}
