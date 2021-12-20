import { clampNumber } from "./clamp-number";

export const mapRange = (
  current: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
): number => {
  const mapped: number =
    ((current - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) +
    outputMin;
  return clampNumber(mapped, outputMin, outputMax);
};
