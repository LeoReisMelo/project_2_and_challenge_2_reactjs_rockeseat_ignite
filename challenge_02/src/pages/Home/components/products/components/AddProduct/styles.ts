import styled from "styled-components";

export const AddProductContainer = styled.main`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["gray-300"]};
  border-radius: 8px;
  padding: 0.1rem;

  svg {
    &:first-child {
      fill: ${(props) => props.theme["purple-700"]};
      cursor: pointer;
    }

    &:nth-child(3) {
      fill: ${(props) => props.theme["purple-700"]};
      cursor: pointer;
    }
  }
`;

export const AddProductQuantityInput = styled.input`
  text-align: center;
  width: 30px;
  height: 38px;
  border: none;
  background-color: ${({ theme }) => theme["gray-300"]};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
