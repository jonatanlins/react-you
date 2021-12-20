import React from "react";

export type ShapeName =
  | "rectangle"
  | "cylinder-h"
  | "cylinder-v"
  | "cylinder-d"
  | "cylinder-a"
  | "blob"
  | "flower"
  | "rhombus"
  | "arrow"
  | "circle";

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export type IconType = (props: IconBaseProps) => JSX.Element;

export type Orientation =
  | "horizontal"
  | "vertical"
  | "horizontal-reverse"
  | "vertical-reverse";
