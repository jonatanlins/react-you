import cn from "classnames";
import React, { useRef, useCallback, useEffect } from "react";

import { createClassname, createTouchHandler, mapRange } from "@/helpers";

import { StyledTimePicker } from "./time-picker.styles";

interface Props {
  value: number;
  onChange: (value: number) => void;
  className: string;
  color: string;
}

const defaultProps: Props = {
  value: 0,
  onChange: () => undefined,
  className: "",
  color: "#c4e8ff",
};

const amHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const TimePicker: React.FC<Partial<Props>> = (customProps) => {
  const props: Props = { ...defaultProps, ...customProps };
  const { color, onChange } = props;
  const timePickerRef = useRef<HTMLDivElement>();

  const className = createClassname("time-picker", {}, props.className);

  const changeValue = useCallback((value: number) => {
    const element = timePickerRef.current;
    if (!element) return;

    element.style.setProperty("--mouse-deg", `${(value + 3) * 30 - 179}deg`);
    element.style.setProperty("--ddff", `ffs`);
  }, []);

  const handleMove = (event: MouseEvent) => {
    const element = timePickerRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const x = mapRange(event.clientX, bounds.left, bounds.right, -1, 1);
    const y = mapRange(event.clientY, bounds.top, bounds.bottom, -1, 1);
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    const time = ((Math.round((angle + 180) / 30) + 8) % 12) + 1;

    changeValue(time);
    onChange(time);
  };

  const handleTouch = createTouchHandler(handleMove);

  useEffect(() => changeValue(props.value), [changeValue, props.value]);

  return (
    <StyledTimePicker
      color={color}
      className={className}
      onMouseDown={handleTouch}
      ref={timePickerRef as any}
    >
      <div className="clock-pointer" />
      {amHours.map((number) => (
        <div
          key={number}
          className={cn("clock-number", { active: number === props.value })}
          style={{
            top: `calc((${-Math.cos((number / 6) * Math.PI)} + 1) * 37% + 13%)`,
            left: `calc((${Math.sin((number / 6) * Math.PI)} + 1) * 37% + 13%)`,
          }}
        >
          {number}
        </div>
      ))}
    </StyledTimePicker>
  );
};
