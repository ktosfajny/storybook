module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport", // dodaje addon do viewportu którym można sprawdzić jak wygląda na telefonach
    "@storybook/addon-knobs", // dodaje knoby np boolean przełączniki
    "@storybook/addon-a11y", // dodaje addon do Acessibility
  ],
};
