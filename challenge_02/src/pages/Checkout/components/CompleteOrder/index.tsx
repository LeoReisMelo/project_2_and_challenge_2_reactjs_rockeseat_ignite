import { MapPinLine } from "phosphor-react";
import {
  CompleteOrderContainer,
  CompleteOrderInfo,
  FormCompleteOrderContainer,
  WrapperCity,
  WrapperNeighborhood,
} from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <h1>Complete seu pedido</h1>

      <CompleteOrderInfo>
        <MapPinLine size={26} />
        <span>Endereço de Entrega</span>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </CompleteOrderInfo>

      <FormCompleteOrderContainer>
        <form>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <WrapperNeighborhood>
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </WrapperNeighborhood>
          <WrapperCity>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </WrapperCity>
        </form>
      </FormCompleteOrderContainer>
    </CompleteOrderContainer>
  );
}
