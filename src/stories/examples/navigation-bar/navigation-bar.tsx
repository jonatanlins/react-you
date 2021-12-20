import React, { useRef, useState } from "react";

import { Box, Button } from "@/components";
import {
  MdAdd,
  MdOutlineMicNone,
  MdOutlineImage,
  MdOutlineCheckBox,
  MdOutlineBrush,
} from "@/icons";

import { StyledNavigationBar } from "./navigation-bar.styles";

const buttons = [
  { name: "Add", icon: MdAdd },
  { name: "MicNone", icon: MdOutlineMicNone },
  { name: "Image", icon: MdOutlineImage },
  { name: "CheckBox", icon: MdOutlineCheckBox },
  { name: "Brush", icon: MdOutlineBrush },
];

export const NavigationBar: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Add");

  return (
    <StyledNavigationBar>
      <Box className="container" color="#f7734f">
        {buttons.map(({ name, icon }) => (
          <Button
            key={name}
            onClick={() => setSelectedButton(name)}
            color="#f7734f"
            icon={icon}
            variant={selectedButton === name ? "contained" : "text"}
            shape="rectangle"
          />
        ))}
      </Box>
    </StyledNavigationBar>
  );
};
