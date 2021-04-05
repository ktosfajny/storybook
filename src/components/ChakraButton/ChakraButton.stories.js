import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    // dodajesz własiwośc która pozwala dodać typy inputów obsługujących controlki
    colorScheme: {
      // colorSheme prop ma mieć control inputa text (móglbyś np dac number albo date itd)
      control: "text",
    },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Success.args = {
  colorScheme: "red",
  children: "Danger",
};
