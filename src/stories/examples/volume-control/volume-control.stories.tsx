import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VolumeControl } from "./volume-control";

export default {
  title: "Examples/VolumeControl",
} as ComponentMeta<typeof VolumeControl>;

const Template: ComponentStory<typeof VolumeControl> = (args) => {
  return <VolumeControl {...args} />;
};

export const Example = Template.bind({});
Example.args = {};
