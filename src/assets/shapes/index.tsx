import React from "react";

import { shapes } from "./shapes";

export const Shapes: React.FC = () => {
  return (
    <svg height="0" width="0">
      <defs>
        {shapes.map((shape) => (
          <clipPath
            key={shape.name}
            id={shape.name}
            clipPathUnits="objectBoundingBox"
          >
            <path d={shape.path} />
          </clipPath>
        ))}
      </defs>
    </svg>
  );
};
