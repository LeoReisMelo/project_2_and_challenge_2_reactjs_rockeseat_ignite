import styled from "styled-components";

export const CompleteOrderContainer = styled.main`
  color: ${(props) => props.theme["gray-900"]};
`;

export const FormCompleteOrderContainer = styled.div`
  padding: 3rem 0rem 0rem 2rem;

  input {
    background: ${(props) => props.theme["gray-200"]};
    border: 1px solid ${(props) => props.theme["gray-300"]};
    border-radius: 8px;
    padding: 1rem;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme["black-300"]};

    &:nth-child(1) {
      width: 20%;
    }

    &:nth-child(2) {
      width: 100%;
    }

    &::placeholder {
      color: ${(props) => props.theme["black-100"]};
    }
  }
`;

export const WrapperNeighborhood = styled.div`
  padding: 1.5rem 0rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  input {
    &:first-child {
      width: 95%;
    }

    &:nth-child(2) {
      width: 100%;
    }
  }
`;

export const WrapperCity = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.1fr;
  gap: 1.5rem;

  input {
    &:first-child {
      width: 100%;
    }

    &:nth-child(2) {
      width: 100%;
    }

    &:nth-child(3) {
      max-width: 3.5rem;
    }
  }
`;

export const CompleteOrderInfo = styled.div`
  padding: 3rem 0rem 0rem 2rem;

  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-800"]};
    padding: 1rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["gray-700"]};
    padding: 0.5rem 0rem 0rem 2.7rem;
  }

  svg {
    &:first-child {
      color: ${(props) => props.theme["yellow-700"]};
    }
  }
`;
