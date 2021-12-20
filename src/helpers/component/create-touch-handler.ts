import React from "react";

type Return = (event: React.MouseEvent) => void;
type Handler = (event: MouseEvent) => void;

export const createTouchHandler = (callback: Handler): Return => {
  const endTouch = () => {
    document.removeEventListener("mousemove", callback);
    document.removeEventListener("mouseup", endTouch);
  };

  const startTouch: Return = (event: React.MouseEvent) => {
    callback(event as any);

    document.addEventListener("mousemove", callback);
    document.addEventListener("mouseup", endTouch);
  };

  return startTouch;
};
