import chroma from "chroma-js";
import styled from "styled-components";

interface StyledTextProps {
  color: string;
  align: string;
  display: string;
}

export const StyledText = styled.span<StyledTextProps>`
  text-align: ${(props) => props.align};
  display: ${(props) => props.display};
  font-size: 16px;
  line-height: 1em;
  color: ${({ color }) => chroma(color).darken(3).css()};
`;
