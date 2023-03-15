import { ActionContainer, Add, Counter, Remove } from './styles';
import { Minus, Plus, ShoppingCart, Trash } from 'phosphor-react';
import { useState, useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';

// import { coffees } from '../../products/products';

interface CounterProps {
  id: string;
  actionType: string;
}

export function Action({ id, actionType }: CounterProps) {
  const { cart, updateCart, removeFromCart } = useContext(OrderContext);
  const [quantity, setQuantity] = useState(0);
  const item = cart.find((item) => item.id === id);
  // const [card, setCard] = useState(actionType);

  function handleSetQuantity(type: string) {
    switch (type) {
      case 'add':
        setQuantity((quantity) => (quantity >= 0 ? quantity + 1 : 0));
        break;

      case 'sub':
        setQuantity((quantity) => (quantity >= 1 ? quantity - 1 : 0));
        break;

      default:
        setQuantity(0);
    }
  }

  return (
    <ActionContainer>
      <Counter>
        <div
          onClick={() =>
            actionType === 'buy'
              ? handleSetQuantity('sub')
              : updateCart(id, item ? item.quantity - 1 : 0)
          }
        >
          <Minus size={13} />
        </div>
        <p>{actionType === 'buy' ? quantity : item?.quantity}</p>
        <div
          onClick={() =>
            actionType === 'buy'
              ? handleSetQuantity('add')
              : updateCart(id, item ? item.quantity + 1 : 0)
          }
        >
          <Plus size={13} />
        </div>
      </Counter>
      {actionType === 'buy' && (
        <Add onClick={() => updateCart(id, quantity)}>
          <ShoppingCart size={16} weight="fill" color="#ffffff" />
        </Add>
      )}
      {actionType === 'remove' && (
        <Remove onClick={() => removeFromCart(id)}>
          <Trash size={16} />
          <p>Remover</p>
        </Remove>
      )}
    </ActionContainer>
  );
}
