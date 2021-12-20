import chroma from "chroma-js";
import { prop } from "ramda";
import styled, { keyframes } from "styled-components";

import wave from "./assets/wave.svg";

interface StyledSliderProps {
  color: string;
}

const getBarSize = (r: number) =>
  `calc((100% - ${r}px) * (1 - var(--value)) + ${r}px)`;

const getProgressSize = (r: number) =>
  `calc((100% - ${r}px) * var(--value) + ${r}px)`;

const getThumbPosition = (r: number) => `calc((100% - ${r}px) * var(--value))`;

const waveAnimation = keyframes`
  from {
    background-position-x: -39px;
  }
  to {
    background-position-x: 0px;
  }
`;

export const StyledSlider = styled.div<StyledSliderProps>`
  position: relative;
  height: 16px;
  width: 100%;
  user-select: none;
  cursor: pointer;

  .slider-bar {
    position: absolute;
    width: ${getBarSize(16)};
    background-color: ${({ color }) => chroma(color).alpha(0.25).css()};
    right: 0;
  }

  .slider-progress {
    position: absolute;
    width: ${getProgressSize(16)};
  }

  .slider-thumb {
    position: absolute;
    left: ${getThumbPosition(16)};
  }

  &.ryou-slider-variant-basic {
    .slider-bar {
      height: 16px;
      border-radius: 99px;
    }

    .slider-progress {
      height: 16px;
      background-color: ${prop("color")};
      border-radius: 99px;
    }
  }

  &.ryou-slider-variant-wavy {
    .slider-bar {
      height: 4px;
      top: 6px;
      border-radius: 99px;
    }

    .slider-progress {
      height: 16px;
      background-image: url(${wave});
      background-repeat: repeat-x;
      background-position-y: 2px;
      background-size: auto 12px;
      animation: ${waveAnimation} 1s linear infinite;
    }

    .slider-thumb {
      width: 16px;
      height: 16px;
      top: 0;
      border-radius: 99px;
      background-color: ${prop("color")};
      transform: scale(1.25);
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.35);
      }
    }
  }

  &.ryou-slider-variant-large {
    .slider-bar {
      height: 4px;
      top: 6px;
      border-radius: 99px;
    }

    .slider-progress {
      background-color: ${prop("color")};
      height: 32px;
      border-radius: 99px;
      top: -8px;
      width: ${getProgressSize(32)};
    }

    .slider-thumb {
      width: 32px;
      height: 32px;
      top: -8px;
      left: ${getThumbPosition(32)};
      color: ${({ color }) => chroma(color).darken(1.6).css()};
      display: grid;
      place-items: center;
      font-size: 18px;
    }
  }

  &.ryou-slider-orientation-vertical,
  &.ryou-slider-orientation-vertical-reverse {
    min-height: 50px;
    height: 100%;
    width: 16px;

    .slider-bar {
      width: 16px;
      height: ${getBarSize(16)};
    }

    .slider-progress {
      width: 16px;
      height: ${getProgressSize(16)};
      bottom: 0;
    }

    &.ryou-slider-variant-large {
      .slider-bar {
        width: 4px;
        left: 14px;
        top: 0;
        height: ${getBarSize(32)};
      }

      .slider-progress {
        top: initial;
        width: 32px;
        height: ${getProgressSize(32)};
        bottom: 0;
      }

      .slider-thumb {
        top: initial;
        bottom: ${getThumbPosition(32)};
        left: 0;
      }
    }
  }

  &.ryou-slider-orientation-horizontal-reverse,
  &.ryou-slider-orientation-vertical-reverse {
    transform: rotate(180deg);
  }
`;
