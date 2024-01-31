import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 8px;
      text-decoration: none;

      &.active {
        color: ${(props) => props.theme["green-500"]};
      }

      &:first-child {
        gap: 0.5rem;
        background: ${(props) => props.theme["purple-300"]};
        color: ${(props) => props.theme["purple-700"]};
        padding: 0 0.5rem;
      }

      &:nth-child(2) {
        width: 3rem;
        background: ${(props) => props.theme["yellow-300"]};
        color: ${(props) => props.theme["yellow-700"]};
      }
    }
  }
`;
