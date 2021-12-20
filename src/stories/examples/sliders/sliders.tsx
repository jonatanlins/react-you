import React from "react";

import { Box, Slider } from "@/components";
import { MdMusicNote } from "@/icons";

import { StyledSliders } from "./sliders.styles";

export const Sliders: React.FC = () => {
  const [volume1, setVolume1] = React.useState(42);
  const [volume2, setVolume2] = React.useState(26);
  const [volume3, setVolume3] = React.useState(65);
  const [volume4, setVolume4] = React.useState(50);

  return (
    <StyledSliders>
      <Box color="#89d2ff">
        <Slider
          value={volume1}
          onChange={setVolume1}
          orientation="horizontal"
          variant="basic"
          color="#89d2ff"
        />
      </Box>
      <Box color="#fff47e">
        <Slider
          value={volume2}
          onChange={setVolume2}
          orientation="horizontal"
          variant="large"
          color="#fff47e"
        />
      </Box>
      <Box color="#24ac8e">
        <Slider
          value={volume3}
          onChange={setVolume3}
          orientation="horizontal"
          variant="wavy"
          color="#24ac8e"
        />
      </Box>
      <Box color="#f7734f">
        <Slider
          value={volume4}
          onChange={setVolume4}
          orientation="horizontal"
          variant="large"
          icon={MdMusicNote}
          color="#f7734f"
        />
      </Box>
    </StyledSliders>
  );
};
