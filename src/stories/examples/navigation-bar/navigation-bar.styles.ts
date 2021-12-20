import styled from "styled-components";

interface StyledNavigationBarProps {}

export const StyledNavigationBar = styled.div<StyledNavigationBarProps>`
  .container {
    padding: 32px;
    width: 480px;
    border-radius: 32px;
    display: flex;
    gap: 24px;
  }
`;
