import chroma from "chroma-js";
import { prop } from "ramda";
import styled from "styled-components";

interface StyledTimePickerProps {
  color: string;
}

const darkColor = (props: StyledTimePickerProps) =>
  chroma(props.color).darken(3).css();

export const StyledTimePicker = styled.div<StyledTimePickerProps>`
  padding: 50px;
  border-radius: 999px;
  background-color: ${prop("color")};
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
  user-select: none;
  cursor: pointer;
  font-weight: 600;

  .clock-number {
    font-size: 16px;
    position: absolute;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    transform: translate(-50%, -50%);
    color: ${darkColor};
    transition: font-size 50ms;

    &.active {
      color: white;
      font-size: 22px;
    }
  }

  .clock-pointer {
    position: absolute;
    height: 2px;
    width: 60px;
    background-color: ${darkColor};
    left: 50%;
    top: 50%;
    transform: translate(-1px, -1px) rotate(var(--mouse-deg));
    transform-origin: 1px 1px;

    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 99px;
      background-color: ${darkColor};
      top: -2px;
      left: -2px;
    }

    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 99px;
      background-color: ${darkColor};
      top: -15px;
      right: -30px;
    }
  }
`;
