import React from "react";

import { Box, Button } from "@/components";
import {
  MdAdd,
  MdTimer,
  MdOutlineArchive,
  MdOutlineMergeType,
  MdOutlineDone,
  MdOutlineBookmarks,
  MdOutlineFlightTakeoff,
  MdOutlineFavoriteBorder,
  MdOutlineExplore,
} from "@/icons";

import { StyledButtons } from "./buttons.styles";

export const Buttons: React.FC = () => {
  return (
    <StyledButtons>
      <Box color="#89d2ff">
        <Button color="#89d2ff" icon={MdTimer} shape="cylinder-a" />
      </Box>
      <Box color="#f7734f">
        <Button color="#f7734f" size="large">
          Send
        </Button>
      </Box>
      <Box color="#24ac8e">
        <Button color="#24ac8e" icon={MdAdd} size="large" shape="blob" />
      </Box>
      <Box color="#f7734f">
        <Button color="#f7734f" size="small" variant="outlined">
          Close
        </Button>
      </Box>
      <Box color="#f7734f">
        <Button
          color="#f7734f"
          icon={MdOutlineArchive}
          size="large"
          shape="rectangle"
        />
      </Box>
      <Box color="#fff47e">
        <Button
          color="#fff47e"
          icon={MdOutlineDone}
          size="large"
          shape="flower"
        />
      </Box>
      <Box color="#89d2ff">
        <Button color="#89d2ff" icon={MdOutlineExplore} variant="outlined" />
      </Box>
      <Box color="#24ac8e">
        <Button
          color="#24ac8e"
          icon={MdOutlineMergeType}
          size="large"
          shape="arrow"
        />
      </Box>
      <Box color="#fff47e">
        <Button
          color="#fff47e"
          icon={MdOutlineBookmarks}
          size="large"
          shape="circle"
        />
      </Box>
      <Box color="#24ac8e">
        <Button color="#24ac8e" size="large">
          Submit
        </Button>
      </Box>
      <Box color="#f7734f">
        <Button
          color="#f7734f"
          icon={MdOutlineFavoriteBorder}
          variant="text"
          shape="rectangle"
        />
      </Box>
      <Box color="#89d2ff">
        <Button
          color="#89d2ff"
          icon={MdOutlineFlightTakeoff}
          size="large"
          shape="rhombus"
        />
      </Box>
    </StyledButtons>
  );
};
