import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MdMusicNote } from "@/icons";

import { Slider } from "./slider";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    color: { control: "color" },
  },
  args: {
    orientation: "horizontal",
    min: 0,
    max: 100,
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  const [value, setValue] = React.useState(50);

  return (
    <div style={{ height: 300 }}>
      <Slider {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  variant: "basic",
};

export const Wavy = Template.bind({});
Wavy.args = {
  variant: "wavy",
};

export const Large = Template.bind({});
Large.args = {
  variant: "large",
};

export const LargeWithIcon = Template.bind({});
LargeWithIcon.args = {
  variant: "large",
  icon: MdMusicNote,
  color: "#f7734f",
};
