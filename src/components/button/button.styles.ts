import chroma from "chroma-js";
import { prop } from "ramda";
import styled from "styled-components";

interface StyledButtonProps {
  color: string;
  shape?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  box-sizing: border-box;
  border: none;
  border-radius: 12px;
  background-color: transparent;
  color: ${prop("color")};
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  transition: background-color 0.15s, transform 0.15s;

  &.ryou-button-variant-contained {
    background-color: ${prop("color")};
    color: ${({ color }) => chroma(color).darken(2.5).css()};

    &:hover {
      background-color: ${({ color }) => chroma(color).brighten(0.25).css()};
    }

    &:active {
      background-color: ${({ color }) => chroma(color).brighten(0.5).css()};
    }
  }

  &.ryou-button-variant-outlined {
    border-color: ${({ color }) => chroma(color).darken(1.6).css()};
    color: ${({ color }) => chroma(color).darken(1.6).css()};
  }

  &.ryou-button-variant-text {
    color: ${({ color }) => chroma(color).darken(1.6).css()};
  }

  &.ryou-button-size-small {
    padding: 8px 20px;
  }

  &.ryou-button-size-medium {
    padding: 12px 30px;
  }

  &.ryou-button-size-large {
    padding: 16px 40px;
  }

  &.ryou-button-icon {
    padding: 0;
    display: grid;
    place-items: center;

    &.ryou-button-variant-contained {
      border-radius: 0;
      clip-path: ${({ shape }) => (shape ? `url(#${shape})` : "none")};

      &.ryou-button-shape-rectangle {
        border-radius: 12px;
      }
    }

    &.ryou-button-size-small {
      height: 32px;
      width: 32px;
      font-size: 16px;
    }

    &.ryou-button-size-medium {
      height: 64px;
      width: 64px;
      font-size: 28px;

      &.ryou-button-shape-rectangle {
        border-radius: 16px;
      }
    }

    &.ryou-button-size-large {
      height: 80px;
      width: 80px;
      font-size: 28px;

      &.ryou-button-shape-rectangle {
        border-radius: 20px;
      }
    }
  }

  &:active {
    transform: scale(1.05);
  }
`;
