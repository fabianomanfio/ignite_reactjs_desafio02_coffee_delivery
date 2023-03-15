import { MapPinLine } from 'phosphor-react';
import { FormAddress } from './Components/FormAddress';
import { BasicHeader, OrderContainer, OrderContainerMain } from './styles';

export function Order() {
  return (
    <OrderContainer>
      <h3>Complete seu pedido</h3>

      <OrderContainerMain>
        <BasicHeader variantColor="yellow-dark">
          <MapPinLine size={22} />
          <div>
            <h4>Endereço de entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </BasicHeader>
        <FormAddress />
      </OrderContainerMain>
    </OrderContainer>
  );
}
