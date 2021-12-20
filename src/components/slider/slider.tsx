import React, { useEffect, useCallback } from "react";

import { createClassname, mapRange, createTouchHandler } from "@/helpers";
import type { IconType, Orientation } from "@/types";

import { StyledSlider } from "./slider.styles";

interface Props {
  value: number;
  onChange: (value: number) => void;
  className: string;
  color: string;
  variant: "basic" | "wavy" | "large";
  orientation: Orientation;
  min: number;
  max: number;
  icon?: IconType;
}

const defaultProps: Props = {
  value: 0,
  onChange: () => undefined,
  className: "",
  color: "#0e6a56",
  variant: "basic",
  orientation: "horizontal",
  min: 0,
  max: 100,
};

const getBounds = (orientation: Orientation, event: any, element: any) => {
  const bounds = element.getBoundingClientRect();
  const table: Record<Orientation, [number, number, number]> = {
    horizontal: [event.clientX, bounds.left + 8, bounds.right - 8],
    "horizontal-reverse": [event.clientX, bounds.right - 8, bounds.left + 8],
    vertical: [event.clientY, bounds.bottom - 8, bounds.top + 8],
    "vertical-reverse": [event.clientY, bounds.top + 8, bounds.bottom - 8],
  };
  const [position, start, end] = table[orientation];
  return { position, start, end };
};

export const Slider: React.FC<Partial<Props>> = (customProps) => {
  const props: Props = { ...defaultProps, ...customProps };
  const { variant, color, onChange, orientation, min, max, icon: Icon } = props;
  const sliderBarRef = React.useRef<HTMLDivElement>();

  const className = createClassname(
    "slider",
    { variant, orientation },
    props.className
  );

  const changeValue = useCallback(
    (value: number) => {
      const element = sliderBarRef.current;
      if (!element) return;

      element.style.setProperty(
        "--value",
        `${mapRange(value, min, max, 0, 1)}`
      );
    },
    [max, min]
  );

  const handleMove = useCallback(
    (event: MouseEvent) => {
      const element = sliderBarRef.current;
      if (!element) return;

      const { position, start, end } = getBounds(orientation, event, element);
      const progress = mapRange(position, start, end, min, max);
      changeValue(progress);
      onChange(progress);
    },
    [orientation, min, max, changeValue, onChange]
  );

  const handleTouch = createTouchHandler(handleMove);

  useEffect(() => changeValue(props.value), [changeValue, props.value]);

  return (
    <StyledSlider
      className={className}
      color={color}
      ref={sliderBarRef as any}
      onMouseDown={handleTouch}
    >
      <div className="slider-bar" />
      <div className="slider-progress" />
      <div className="slider-thumb">{Icon ? <Icon /> : undefined}</div>
    </StyledSlider>
  );
};
