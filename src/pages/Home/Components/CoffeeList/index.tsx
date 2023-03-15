import {
  BuyContainer,
  CoffeeCard,
  CoffeeListContainer,
  Description,
  Tag,
  CoffeeListCards,
  CoffeeListHeader,
  CoffeeFilter,
  CoffeeFilterButton,
} from './styles';
import { Action } from '../../../../components/Action';

// import { coffees } from '../../../../products/products';
import { useContext, useState } from 'react';
import { OrderContext } from '../../../../contexts/OrderContext';

const coffeesTypes = [
  'TRADICIONAL',
  'ESPECIAL',
  'COM LEITE',
  'ALCOÓLICO',
  'GELADO',
];

export function CoffeeList() {
  const [coffeeFilter, setCoffeeFilter] = useState<string[]>(coffeesTypes);
  const { coffees } = useContext(OrderContext);
  const [activedButton, setActivedButton] = useState<string>('');

  function toggleCoffeType(coffeeType: string) {
    const isSelect = coffeeFilter.length === 1;

    if (isSelect) {
      setCoffeeFilter(coffeesTypes);
      setActivedButton('');
    } else {
      setCoffeeFilter([coffeeType]);
      setActivedButton(coffeeType);
    }
  }

  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h2>Nossos cafés</h2>
        <CoffeeFilter>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('TRADICIONAL')}
            isActive={coffeesTypes[0] === activedButton}
          >
            tradicional
          </CoffeeFilterButton>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('ESPECIAL')}
            isActive={coffeesTypes[1] === activedButton}
          >
            especial
          </CoffeeFilterButton>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('COM LEITE')}
            isActive={coffeesTypes[2] === activedButton}
          >
            com leite
          </CoffeeFilterButton>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('ALCOÓLICO')}
            isActive={coffeesTypes[3] === activedButton}
          >
            alcoolico
          </CoffeeFilterButton>
          <CoffeeFilterButton
            onClick={() => toggleCoffeType('GELADO')}
            isActive={coffeesTypes[4] === activedButton}
          >
            gelado
          </CoffeeFilterButton>
        </CoffeeFilter>
      </CoffeeListHeader>

      <CoffeeListCards>
        {coffees.map((coffee) => {
          const hasTypes = coffee.tags.filter((tag) =>
            coffeeFilter.includes(tag),
          );
          const isAble = hasTypes.length !== 0;
          // console.log(coffee.name, isAble);
          return (
            isAble && (
              <CoffeeCard key={coffee.id}>
                <img src={coffee.coffeeImage} alt="" />
                <div>
                  {coffee.tags.map((tag) => (
                    <Tag key={tag + coffee.id}>{tag}</Tag>
                  ))}
                </div>
                <h3>{coffee.name}</h3>
                <Description>{coffee.description}</Description>
                <BuyContainer>
                  <p>R$</p>
                  <span>{coffee.price.toFixed(2)}</span>
                  <Action id={coffee.id} actionType={'buy'} />
                </BuyContainer>
              </CoffeeCard>
            )
          );
        })}
      </CoffeeListCards>
    </CoffeeListContainer>
  );
}

// <CoffeeCard>
//   <img src={images.ExpressoTradicional} alt="" />
//   <Tag>TRADICIONAL</Tag>
//   <h3>Expresso Tradicional</h3>
//   <Description>
//     O tradicional café feito com água quente e grãos moídos
//   </Description>
//   <BuyContainer>
//     <p>R$</p>
//     <span>9,90</span>
//     <Action />
//   </BuyContainer>
// </CoffeeCard>
