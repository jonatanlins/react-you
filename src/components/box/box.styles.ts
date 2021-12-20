import chroma from "chroma-js";
import styled from "styled-components";

interface StyledBoxProps {
  color: string;
}

export const StyledBox = styled.div<StyledBoxProps>`
  padding: 16px;
  margin: 12px;
  border-radius: 8px;
  background-color: ${({ color }) => chroma(color).alpha(0.2).css()};
  box-sizing: border-box;
`;
