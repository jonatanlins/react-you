import React from "react";

import { createClassname } from "@/helpers";

import { StyledText } from "./text.styles";

interface Props extends React.ComponentPropsWithoutRef<"span"> {
  color: string;
  align: "left" | "right" | "center";
  display: "inline" | "block";
}

const defaultProps: Props = {
  color: "#222",
  align: "left",
  display: "inline",
};

export const Text: React.FC<Partial<Props>> = (customProps) => {
  const props: Props = { ...defaultProps, ...customProps };
  const { children } = props;

  const className = createClassname("text", {}, props.className);

  return (
    <StyledText {...props} className={className}>
      {children}
    </StyledText>
  );
};
