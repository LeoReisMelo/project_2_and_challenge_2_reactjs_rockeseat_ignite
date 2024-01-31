import styled from "styled-components";

export const InfoContainer = styled.main`
  padding: 9rem 0rem 0rem 0rem;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const InfoTexts = styled.div`
  gap: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: bold;
    line-height: 1.6;
    font-size: 3.5rem;
    color: ${(props) => props.theme["gray-900"]};
  }

  h3 {
    line-height: 1.6;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const InfoItems = styled.div`
  margin-top: 1rem;
  gap: 0.5rem;
  display: grid;
  grid-template-columns: 0.25fr 0.25fr;

  span {
    display: flex;
    align-items: center;
    width: 16rem;
  }

  svg {
    border: 2px solid transparent;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    box-sizing: content-box;
    padding: 0.5rem;
  }
`;

export const InfoItemsTop = styled(InfoItems)`
  svg {
    &:first-child {
      background: ${(props) => props.theme["yellow-700"]};
    }

    &:nth-child(3) {
      background: ${(props) => props.theme["yellow-500"]};
    }
  }
`;

export const InfoItemsBottom = styled(InfoItems)`
  svg {
    &:first-child {
      background: ${(props) => props.theme["gray-700"]};
    }

    &:nth-child(3) {
      background: ${(props) => props.theme["purple-500"]};
    }
  }
`;
