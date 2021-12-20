import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "./text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    color: { control: "color" },
  },
  args: {
    children: "Some text goes here...",
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  return <Text {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
