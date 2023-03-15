import { CoffeeList } from './Components/CoffeeList';
import { Info } from './Components/Info';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Info />
      <CoffeeList />
    </HomeContainer>
  );
}
