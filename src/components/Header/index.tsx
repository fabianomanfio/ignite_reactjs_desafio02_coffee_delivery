import logoCoffeeDelivery from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { HeaderContainer, NavBarLink } from './styles';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { OrderContext } from '../../contexts/OrderContext';
import { CoffeeListContainer } from '../../pages/Home/Components/CoffeeList/styles';

export function Header() {
  const [locality, setLocality] = useState('');
  const [regionCode, setRegionCode] = useState('');
  const { cart, location, setLocation } = useContext(OrderContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  async function getGeoLocalization(latitude: number, longitude: number) {
    // const params = {
    //   access_key: import.meta.env.VITE_POSITION_STACK_KEY_API,
    //   query: `${latitude}, ${longitude}`,
    // };

    const response = await axios
      // .get('http://api.positionstack.com/v1/reverse', { params })
      .get(
        `https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${latitude}&lon=${longitude}`,
      )
      .catch((error) => {
        console.log(error);
      });
    return response;
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      console.log('Geo Localization Not Available');
      return;
    }
    navigator.geolocation.getCurrentPosition(async function (position) {
      const dados = await getGeoLocalization(
        position.coords.latitude,
        position.coords.longitude,
      );

      // console.log(dados);

      if (!location) {
        setLocation(
          dados?.data.features[0].properties.geocoding.city,
          dados?.data.features[0].properties.geocoding.state,
        );
        setLocality(dados?.data.features[0].properties.geocoding.city);
        setRegionCode(dados?.data.features[0].properties.geocoding.state);
      } else {
        setLocality(location?.city);
        setRegionCode(location?.stateOf);
      }
    });
  }, [location, setLocation]);

  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="logo" />
      <nav>
        <div>
          <MapPin size={24} weight="fill" />
          {locality ? (
            <span>
              {locality}, {regionCode}
            </span>
          ) : (
            <div>Carregando...</div>
          )}
        </div>
        <NavBarLink to="/checkout" title="Carrinho">
          {cart.length !== 0 ? <span>{totalItems}</span> : ''}
          <ShoppingCart size={24} weight="fill" />
        </NavBarLink>
      </nav>
    </HeaderContainer>
  );
}
