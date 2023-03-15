import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  InfoContainer,
  InfoList,
  InfoText,
  ItemCoffee,
  ItemPackege,
  ItemShoppingCard,
  ItemTimer,
} from './styles';

import Imagem from '../../../../assets/imagem.svg';

export function Info() {
  return (
    <InfoContainer>
      <div>
        <InfoText>
          <h1>
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, <br /> a
            qualquer hora
          </p>
        </InfoText>
        <InfoList>
          <div>
            <ItemShoppingCard>
              <div>
                <ShoppingCart size={16} weight="fill" color="#ffffff" />
              </div>
              <span>Compra simples e segura</span>
            </ItemShoppingCard>
            <ItemTimer>
              <div>
                <Timer size={16} weight="fill" color="#ffffff" />
              </div>
              <span>Compra simples e segura</span>
            </ItemTimer>
          </div>
          <div>
            <ItemPackege>
              <div>
                <Package size={16} weight="fill" color="#ffffff" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </ItemPackege>
            <ItemCoffee>
              <div>
                <Coffee size={16} weight="fill" color="#ffffff" />
              </div>
              <span>O café chega fresquinho até você</span>
            </ItemCoffee>
          </div>
        </InfoList>
      </div>
      <div>
        <img src={Imagem} alt="" />
      </div>
    </InfoContainer>
  );
}
