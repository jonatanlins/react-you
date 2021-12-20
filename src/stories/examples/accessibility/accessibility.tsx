import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useEffect } from "react";

import { Box, Button, Slider, TimePicker, Text } from "@/components";
import { MdAdd, MdTimer } from "@/icons";

import { StyledAccessibility } from "./accessibility.styles";

dayjs.extend(duration);

const totalDuration = 212;

const getDuration = (value: number) =>
  dayjs.duration(value * 1000).format("mm:ss");

export const Accessibility: React.FC = () => {
  const [accessibilityLevel, setAccessibilityLevel] = React.useState(50);
  const [videoProgress, setVideoProgress] = React.useState(50);
  const [time, setTime] = React.useState(9);

  const moveProgressBar = () => {
    setVideoProgress((state) => (state < totalDuration ? state + 0.1 : 0));
  };

  useEffect(() => {
    const id = setInterval(moveProgressBar, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <StyledAccessibility>
      <div>
        <TimePicker color="#c4e8ff" value={time} onChange={setTime} />
      </div>
      <Box color="#24ac8e">
        <Slider
          value={accessibilityLevel}
          onChange={setAccessibilityLevel}
          orientation="vertical"
        />
      </Box>
      <Box color="#ffb2a1">
        <Button color="#ffb2a1">Send</Button>
      </Box>
      <Box color="#c4e8ff">
        <Button color="#c4e8ff" icon={MdTimer} />
      </Box>
      <Box color="#ffb2a1">
        <Button color="#ffb2a1" icon={MdAdd} size="large" shape="rectangle" />
      </Box>
      <Box color="#24ac8e">
        <Slider
          value={videoProgress}
          onChange={setVideoProgress}
          max={totalDuration}
          variant="wavy"
        />
        <Text color="#24ac8e" align="right" display="block">
          {getDuration(videoProgress)} / {getDuration(totalDuration)}
        </Text>
      </Box>
    </StyledAccessibility>
  );
};
