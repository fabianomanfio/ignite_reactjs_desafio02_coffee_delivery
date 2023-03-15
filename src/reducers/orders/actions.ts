import { NewAddressFormData } from '../../pages/Checkout/Components/Order/Components/FormAddress';

export enum ActionTypes {
  UPDATE_CART = 'UPDATE_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CREATE_NEW_ADDRESS = 'CREATE_NEW_ADDRESS',
  SET_LOCATION = 'SET_LOCATION',
}

export function updateCartAction(idProduct: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      idProduct,
      quantity,
    },
  };
}

export function removeFromCartAction(idProduct: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      idProduct,
    },
  };
}

export function createNewAddressAction(dataForm: NewAddressFormData) {
  return {
    type: ActionTypes.CREATE_NEW_ADDRESS,
    payload: {
      dataForm,
    },
  };
}

export function setLocationAction(city: string, stateOf: string) {
  return {
    type: ActionTypes.SET_LOCATION,
    payload: {
      city,
      stateOf,
    },
  };
}
