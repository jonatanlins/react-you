import styled from "styled-components";

interface StyledVolumeControlProps {}

export const StyledVolumeControl = styled.div<StyledVolumeControlProps>`
  .container {
    padding: 6px;
    width: 44px;
    border-radius: 99px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;

    .ryou-slider {
      height: 200px;
    }
  }
`;
