import React from "react";

import { Box, Button, Slider } from "@/components";
import { MdMusicNote, MdMoreHoriz, MdNotifications } from "@/icons";

import { StyledVolumeControl } from "./volume-control.styles";

export const VolumeControl: React.FC = () => {
  const [volume, setVolume] = React.useState(50);

  return (
    <StyledVolumeControl>
      <Box className="container" color="#f7734f">
        <Button color="#f7734f" icon={MdNotifications} size="small" />

        <Slider
          value={volume}
          onChange={setVolume}
          orientation="vertical"
          variant="large"
          icon={MdMusicNote}
          color="#f7734f"
        />

        <Button color="#fff69b" icon={MdMoreHoriz} size="small" />
      </Box>
    </StyledVolumeControl>
  );
};
