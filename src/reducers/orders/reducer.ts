import { coffees } from '../../products/products';
import { ActionTypes } from './actions';

export interface Coffee {
  id: string;
  name: string;
  coffeeImage: string;
  description: string;
  tags: string[];
  price: number;
}

export interface Item extends Coffee {
  quantity: number;
}

export interface DeliveryInfo {
  postCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  payment: string;
}

export interface Location {
  city: string;
  stateOf: string;
}

export interface OrderState {
  id: string;
  cart: Item[];
  address?: DeliveryInfo;
  location?: Location;
}

export function orderReducer(
  state: OrderState,
  action: any,
): OrderState | undefined {
  switch (action.type) {
    case ActionTypes.UPDATE_CART:
      {
        const idProduct = action.payload.idProduct;
        const itemQuantity = () =>
          action.payload.quantity >= 0 ? action.payload.quantity : 0;
        const items = state.cart.map((item) => {
          if (item.id === idProduct) {
            return {
              ...item,
              quantity: itemQuantity(),
            };
          } else {
            return {
              ...item,
            };
          }
        });
        const hasItem = items.find((item) => item.id === idProduct);
        if (hasItem) {
          return { ...state, cart: items };
        } else {
          const itemCoffee = coffees.find((coffee) => coffee.id === idProduct);
          if (itemCoffee) {
            const newItem: Item = { ...itemCoffee, quantity: itemQuantity() };

            return { ...state, cart: [...items, newItem] };
          }
        }
      }
      break;

    case ActionTypes.REMOVE_FROM_CART: {
      const itemsUpdated = state.cart.filter(
        (item) => item.id !== action.payload.idProduct,
      );
      return { ...state, cart: itemsUpdated };
    }

    case ActionTypes.CREATE_NEW_ADDRESS: {
      return { ...state, address: action.payload.dataForm };
    }

    case ActionTypes.SET_LOCATION: {
      const { city, stateOf } = action.payload;
      return { ...state, location: { city, stateOf } };
    }

    default:
      return state;
  }
}
