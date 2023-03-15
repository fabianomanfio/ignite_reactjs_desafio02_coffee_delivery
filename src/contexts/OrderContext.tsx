import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { coffees } from '../products/products';
import {
  Coffee,
  DeliveryInfo,
  Location,
  Item,
  orderReducer,
} from '../reducers/orders/reducer';
import {
  updateCartAction,
  removeFromCartAction,
  createNewAddressAction,
  setLocationAction,
} from '../reducers/orders/actions';
import { NewAddressFormData } from '../pages/Checkout/Components/Order/Components/FormAddress';
import { useNavigate } from 'react-router-dom';

export interface OrderContextType {
  coffees: Coffee[];
  cart: Item[];
  address?: DeliveryInfo;
  location?: Location;

  updateCart: (idProduct: string, quantity: number) => void;
  removeFromCart: (idProduct: string) => void;
  createNewAddress: (data: NewAddressFormData) => void;
  setLocation: (city: string, stateOf: string) => void;
}

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

export const initialState = {
  id: new Date().toString(),
  cart: [] as Item[],
  address: {} as DeliveryInfo,
  // location: {} as Location,
};

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [load, setLoad] = useState(false);

  const [orderState, dispatch] = useReducer(
    orderReducer,
    // @ts-ignore
    { initialState },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivery:orderState-1.0.0',
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return initialState;
    },
  );

  const { cart, address, location } = orderState;

  function updateCart(idProduct: string, quantity: number) {
    // console.log(idProduct, quantity);
    // @ts-ignore
    dispatch(updateCartAction(idProduct, quantity));
  }

  function removeFromCart(idProduct: string) {
    // console.log(idProduct);
    // @ts-ignore
    dispatch(removeFromCartAction(idProduct));
  }

  function createNewAddress(dataForm: NewAddressFormData) {
    // @ts-ignore
    dispatch(createNewAddressAction(dataForm));
    setLoad(true);
  }

  function setLocation(city: string, stateOf: string) {
    // @ts-ignore
    dispatch(setLocationAction(city, stateOf));
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState);

    localStorage.setItem('@ignite-coffee-delivery:orderState-1.0.0', stateJSON);
  }, [orderState]);

  const navigate = useNavigate();
  useEffect(() => {
    if (load) {
      cart.map((item: any) => {
        removeFromCart(item.id);
        return true;
      });
      navigate('/success');
    }
  }, [load, navigate, cart]);

  return (
    <OrderContext.Provider
      value={{
        coffees,
        cart,
        address,
        location,

        updateCart,
        removeFromCart,
        createNewAddress,
        setLocation,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
