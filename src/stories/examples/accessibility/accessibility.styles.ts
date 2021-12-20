import styled from "styled-components";

interface StyledAccessibilityProps {}

export const StyledAccessibility = styled.div<StyledAccessibilityProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
    padding: 48px;

    &:nth-child(1) {
      padding: 0;
    }

    &:nth-child(2) {
      grid-row: span 2;
    }

    &:nth-child(6) {
      grid-column: span 2;
      gap: 8px;

      > span {
        width: 100%;
      }
    }
  }
`;
