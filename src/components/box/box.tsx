import React from "react";

import { createClassname } from "@/helpers";

import { StyledBox } from "./box.styles";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  color: string;
}

const defaultProps: Props = {
  color: "#0e6a56",
};

export const Box: React.FC<Partial<Props>> = (customProps) => {
  const props: Props = { ...defaultProps, ...customProps };
  const { color, children } = props;

  const className = createClassname("box", {}, props.className);

  return (
    <StyledBox {...props} className={className}>
      {children}
    </StyledBox>
  );
};
