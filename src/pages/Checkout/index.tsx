import { Order } from './Components/Order';
import { Selected } from './Components/Selected';
import { HomeContainer } from './styles';

export function Checkout() {
  return (
    <HomeContainer>
      <Order />
      <Selected />
    </HomeContainer>
  );
}
