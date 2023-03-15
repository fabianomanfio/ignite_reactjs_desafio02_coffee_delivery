import {
  PurchaseButton,
  SelectedContainer,
  SelectedContainerMain,
} from './styles';
// import { coffees } from '../../../../products/products';
import { CoffeeCardSelected } from './Components/CoffeeCardSelected';
import { useContext } from 'react';
import { OrderContext } from '../../../../contexts/OrderContext';

export function Selected() {
  const { cart } = useContext(OrderContext);

  const totalOrder = cart.reduce(
    (acc, item) => acc + (item ? item.price * 1 : 0),
    0,
  );

  const deliveryFee = 3.5;

  return (
    <SelectedContainer>
      <h3>Cafés selecionados</h3>
      <SelectedContainerMain>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <CoffeeCardSelected id={item.id}></CoffeeCardSelected>
              <hr />
            </div>
          );
        })}
        <table>
          <tbody>
            <tr>
              <td>Total de itens</td>
              <td>R$ {totalOrder.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>R$ {deliveryFee.toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>R$ {(totalOrder + deliveryFee).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
        <PurchaseButton type="submit" form="addressForm">
          Confirmar Pedido
        </PurchaseButton>
      </SelectedContainerMain>
    </SelectedContainer>
  );
}
