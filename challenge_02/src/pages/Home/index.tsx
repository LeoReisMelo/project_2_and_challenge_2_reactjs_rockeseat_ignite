import { Info } from "./components/Info";
import { Products } from "./components/products";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Info />
      <Products />
    </HomeContainer>
  );
}
