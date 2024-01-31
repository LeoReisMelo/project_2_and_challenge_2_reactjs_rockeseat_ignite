import { HeaderContainer } from "./styles";
import LogoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={LogoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <NavLink to="#" title="Localização">
          <MapPin weight="fill" size={24} /> <span>Porto Alegre, RS</span>
        </NavLink>
        <NavLink to="/checkout" title="Carrinho de compras">
          <ShoppingCart weight="fill" size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
