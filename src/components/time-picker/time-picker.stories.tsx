import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TimePicker } from "./time-picker";

export default {
  title: "Components/TimePicker",
  component: TimePicker,
  argTypes: {
    color: { control: "color" },
  },
  args: {
    children: "TimePicker",
  },
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => {
  const [value, setValue] = React.useState(2);

  return <TimePicker {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {};
