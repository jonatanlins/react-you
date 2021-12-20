import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MdOutlinePersonOutline } from "@/icons";

import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
  },
  args: {
    children: "Button",
    size: "medium",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "contained",
  icon: MdOutlinePersonOutline,
};

export const Shaped = Template.bind({});
Shaped.args = {
  variant: "contained",
  icon: MdOutlinePersonOutline,
  shape: "blob",
};
