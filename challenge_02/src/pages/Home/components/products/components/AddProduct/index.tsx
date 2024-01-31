import { Minus, Plus } from "phosphor-react";
import { AddProductQuantityInput, AddProductContainer } from "./styles";

export function AddProduct() {
  return (
    <AddProductContainer>
      <Minus size={20} weight="fill" />
      <AddProductQuantityInput type="number" value={1} />
      <Plus size={20} weight="fill" />
    </AddProductContainer>
  );
}
