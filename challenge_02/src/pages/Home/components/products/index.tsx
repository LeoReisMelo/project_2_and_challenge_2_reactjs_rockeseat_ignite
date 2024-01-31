import { ShoppingCart } from "phosphor-react";
import { coffees } from "../../../../utils/coffees";
import { AddProduct } from "./components/AddProduct";
import {
  ProductsContainer,
  ProductsTexts,
  ProductsList,
  ProductCard,
  ThreeTags,
  TwoTags,
  Shopping,
  ButtonAddToCart,
} from "./styles";

export function Products() {
  return (
    <ProductsContainer>
      <ProductsTexts>
        <h1>Nossos cafés</h1>

        <ProductsList>
          {coffees.map((coffee) => (
            <ProductCard key={coffee.id}>
              <img src={coffee.image} />
              {coffee.tags.length > 2 ? (
                <ThreeTags>
                  {coffee.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </ThreeTags>
              ) : coffee.tags.length > 1 ? (
                <TwoTags>
                  {coffee.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </TwoTags>
              ) : (
                <>
                  {coffee.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </>
              )}

              <h2>{coffee.name}</h2>
              <p>{coffee.description}</p>

              <Shopping>
                <p>
                  R$: <strong>{coffee.value}</strong>
                </p>
                <AddProduct />
                <ButtonAddToCart> <ShoppingCart size={24} weight="fill" /> </ButtonAddToCart>
              </Shopping>
            </ProductCard>
          ))}
        </ProductsList>
      </ProductsTexts>
    </ProductsContainer>
  );
}
