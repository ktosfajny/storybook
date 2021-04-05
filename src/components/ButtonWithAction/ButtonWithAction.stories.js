import React from "react";
import { action, actions } from "@storybook/addon-actions";
import ButtonWithAction from "./ButtonWithAction";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "ButtonWithAction",
  component: ButtonWithAction,
  args: {
    children: "Button",
  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
};

export const ActionAddon = () => (
  <ButtonWithAction onClick={action("click handler")} variant="primary">
    ActionAddon
  </ButtonWithAction>
);

export const ActionsAddon = () => (
  <ButtonWithAction {...actions("onClick", "onMouseOver")} variant="primary">
    ActionsAddon
  </ButtonWithAction>
);

export const ConsoleEnvAddon = () => (
  <ButtonWithAction
    onClick={() => console.log("Button clicked", process.env.STORYBOOK_THEME)}
    variant="primary"
  >
    ActionsAddon
  </ButtonWithAction>
);

const Template = (args) => {
  return <ButtonWithAction {...args} />;
};

export const Primary = Template.bind({}); // tworzysz komponent na podstawie tego Template
Primary.args = {
  // teraz zamiast pisać propty jak jak wyżej to możesz je tutaj podawać w obiekcie (dzięki temu widzisz w storybook co podałeś i możesz to zmieniać na bierząco)
  variant: "primary",
  // children: "Primary Args", // nie trzeba pisać osobno children bo jest zdefiniowane w args: {} na górze
};

export const Knobs = () => (
  <ButtonWithAction
    disabled={boolean("Disabled", false)}
    variant={boolean("Is_Primary", true) ? "primary" : "secondary"}
  >
    {text("Label", "Button Initial Value")}
  </ButtonWithAction>
);
