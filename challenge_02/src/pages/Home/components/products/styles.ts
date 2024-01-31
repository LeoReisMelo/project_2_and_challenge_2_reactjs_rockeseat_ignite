import styled from "styled-components";

export const ProductsContainer = styled.main`
  padding: 3rem 0rem;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const ProductsTexts = styled.div`
  gap: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: bold;
    line-height: 1.6;
    font-size: 2.5rem;
    color: ${(props) => props.theme["gray-900"]};
  }

  h3 {
    line-height: 1.6;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const ProductCard = styled.div`
  padding: 1rem;
  border: 1px solid transparent;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    padding: 2rem;
  }

  span {
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.3rem;
    font-weight: bold;
    text-transform: uppercase;
    background: ${(props) => props.theme["yellow-300"]};
    color: ${(props) => props.theme["yellow-700"]};
  }

  h2 {
    padding: 1rem;
    color: ${(props) => props.theme["gray-800"]};
    font-weight: bold;
  }
`;

export const BaseTags = styled.div`
  display: grid;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const ThreeTags = styled(BaseTags)`
  grid-template-columns: 1fr 1fr 1fr;
`;

export const TwoTags = styled(BaseTags)`
  grid-template-columns: 1fr 1fr;
`;

export const Shopping = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    font: 1rem;
  }

  strong {
    font-size: 1.5rem;
    color: ${props => props.theme["gray-700"]}
  }
`;

export const ButtonAddToCart = styled.button`
  display: flex;
  border: none;
  background: ${(props) => props.theme["purple-700"]};
  color: ${(props) => props.theme.white};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.3s;
  padding: 0.5rem;

  &:hover {
    opacity: 0.7;
  }
`;
