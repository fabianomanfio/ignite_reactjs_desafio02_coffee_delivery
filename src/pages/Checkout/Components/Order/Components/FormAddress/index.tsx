import {
  FormAddressContainer,
  FormContainer,
  InputCity,
  InputComplement,
  InputNeighborhood,
  InputNumber,
  InputPostCode,
  InputState,
  InputStreet,
} from './styles';

import { useContext } from 'react';
import { OrderContext } from '../../../../../../contexts/OrderContext';
import { FormProvider, useForm } from 'react-hook-form';
import { Payment } from '../Payment';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const newAddressFormValidationSchema = zod.object({
  postCode: zod.string().min(1, { message: 'Informe o CEP!' }),
  street: zod.string().min(1, 'Informe a Rua!'),
  number: zod.string().min(1, 'Informe o número da Rua!'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o Bairro!'),
  city: zod.string().min(1, 'Informe a Cidade!'),
  state: zod.string().min(1, 'Informe o Estado!').max(2),
  payment: zod.string(),
});

export type NewAddressFormData = zod.infer<
  typeof newAddressFormValidationSchema
>;

export function FormAddress() {
  const { createNewAddress } = useContext(OrderContext);

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
  });

  const { handleSubmit, reset, register } = newAddressForm;

  function handleCreateNewAddress(data: NewAddressFormData) {
    // console.log(data);
    createNewAddress(data);
    reset();
  }

  return (
    <FormContainer
      onSubmit={handleSubmit(handleCreateNewAddress)}
      id="addressForm"
    >
      <FormAddressContainer>
        <InputPostCode
          placeholder="00000-000"
          id="postCode"
          required
          {...register('postCode')}
        />
        <InputStreet
          placeholder="Rua / Avenida"
          id="street"
          required
          {...register('street')}
        />
        <InputNumber
          placeholder="Número"
          id="number"
          required
          {...register('number')}
        />
        <InputComplement
          placeholder="Complemento"
          id="complement"
          {...register('complement')}
        />
        <span>Opcional</span>
        <InputNeighborhood
          placeholder="Bairro"
          id="neighborhood"
          required
          {...register('neighborhood')}
        />
        <InputCity
          placeholder="Cidade"
          id="city"
          required
          {...register('city')}
        />
        <InputState
          placeholder="Estado"
          id="state"
          required
          {...register('state')}
        />
      </FormAddressContainer>
      <FormProvider {...newAddressForm}>
        <Payment />
      </FormProvider>
    </FormContainer>
  );
}
