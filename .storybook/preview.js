import { addDecorator, addParameters } from "@storybook/react"; // importujesz funkcję do GLOBALNYCH decoratorów
import Center from "../src/components/Center/Center";
import "@storybook/addon-console"; // importujesz addon do consolowania w consoli
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // poniżej jest obiekt opcji z funkcją sortującą elementy po nazwie alfabetycznie
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

// poniżej jest tablica decoratorów z akruat tylko jednym deocratorem który centruje stories
export const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Center>{story()}</Center>
    </ThemeProvider>
  ),
  withKnobs,
  // withA11y,
];

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // dodaje dużo dodatkowych i podstawowych rozdzielczości np na telfony różne itd
  },
  a11y: withA11y,
});
