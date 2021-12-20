import React from "react";

import { createClassname } from "@/helpers";
import type { ShapeName, IconType } from "@/types";

import { StyledButton } from "./button.styles";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  color: string;
  variant: "contained" | "outlined" | "text";
  size: "small" | "medium" | "large";
  shape: ShapeName;
  icon?: IconType;
}

const defaultProps: Props = {
  color: "#45bfa4",
  variant: "contained",
  size: "medium",
  shape: "circle",
};

export const Button: React.FC<Partial<Props>> = (customProps) => {
  const props: Props = { ...defaultProps, ...customProps };
  const { children, variant, size, shape, icon: Icon } = props;

  const className = createClassname(
    "button",
    { variant, size, shape, icon: !!Icon },
    props.className
  );

  return (
    <StyledButton {...props} className={className}>
      {Icon ? <Icon /> : children}
    </StyledButton>
  );
};
