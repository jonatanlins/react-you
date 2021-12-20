import styled from "styled-components";

interface StyledSlidersProps {}

export const StyledSliders = styled.div<StyledSlidersProps>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
    padding: 48px;
  }
`;
