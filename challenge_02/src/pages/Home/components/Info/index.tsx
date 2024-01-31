import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeeImage from "../../../../assets/Home/Info/info-image.svg";
import {
  InfoContainer,
  InfoTexts,
  InfoItems,
  InfoItemsTop,
  InfoItemsBottom,
} from "./styles";

export function Info() {
  return (
    <InfoContainer>
      <InfoTexts>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <InfoItems>
          <InfoItemsTop>
            <ShoppingCart size={24} weight="fill" />{" "}
            <span>Compra simples e segura</span>
            <Timer size={24} weight="fill" />{" "}
            <span>Entrega rápida e rastreada</span>
          </InfoItemsTop>
          <InfoItemsBottom>
            <Package size={24} weight="fill" />{" "}
            <span>Embalagem mantém o café intacto</span>
            <Coffee size={24} weight="fill" />{" "}
            <span>O café chega fresquinho até você</span>
          </InfoItemsBottom>
        </InfoItems>
      </InfoTexts>
      <img src={CoffeeImage} alt="" />
    </InfoContainer>
  );
}
