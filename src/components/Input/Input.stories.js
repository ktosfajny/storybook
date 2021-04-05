import React from "react";
import Input from "./Input";

export default {
  title: "form/Input", // znaki "/" pozwalają na grupowanie komponentów, możesz pisac np form/input albo form/control/input itd
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;

Small.storyName = "small Input"; // zmieni nazwę wyświetlaną w storybook (domyślnie jest taka jak anzwa funkcji czyli Small)
