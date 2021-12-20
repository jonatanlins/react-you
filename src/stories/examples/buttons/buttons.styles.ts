import styled from "styled-components";

interface StyledButtonsProps {}

export const StyledButtons = styled.div<StyledButtonsProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
    padding: 48px;
  }
`;
