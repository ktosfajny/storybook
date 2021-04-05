import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
  title: "Button",
  component: Button,
  args: {
    // jak napiszesz w tym miejscu obiekt args to jest on taki globalny, domyslny i każdy komponent go odzieziczy
    children: "button",
  },
  decorators: [(story) => <Center>{story()}</Center>], // decoratory to są takie komponenty które są zdefiniowane w jednym miejscu tutaj w tablicy i potem są użyte do renderowania każdego story, możemy zatem zrobić centrujacy komponment i dopiero w nim renderować stories. Funckja ta dostanie jako argument dane story więc można wywołać to story wewnątrz Center aby Center owrapowało każde stories
  // STORIES ZAPISANE W TYM MIEJSCU BĘDZIE SŁUŻYŁO JEDYNIE DO KOMPONENTÓW ZDEFINiOWANYCH TUTAJ. JAK CHCESZ ŻEBY KAŻDY STORIES KAŻDEGO KOMPONENTU KORZYSTAŁ Z TEGO SAMEGO DECORATORA TO MUSISZ Z KORZYSTAC Z GLOBaLNYCH DECORATORÓW KTÓRE SĄ ZAPISANE W .storybook
};

//  ----------------------------------------------------------------------------------------
// podstawowe
export const Primary = () => {
  // jak chcemy to możemy zrobić komponent Center który wycentruje nasze komponenty żeby pokazywały się na środku zawsze
  return <Button variant="primary">Primary</Button>;
};
export const Secondary = () => <Button variant="secondary">secondary</Button>;
export const Success = () => <Button variant="success">success</Button>;
export const Danger = () => <Button variant="danger">danger</Button>;

//  ----------------------------------------------------------------------------------------

// tworzysz sobie template do tego że do Button zostaną wrzucone wszystkie argumenty jakie podasz
const Template = (args) => {
  return <Button {...args} />;
};

export const PrimaryA = Template.bind({}); // tworzysz komponent na podstawie tego Template
PrimaryA.args = {
  // teraz zamiast pisać propty jak jak wyżej to możesz je tutaj podawać w obiekcie (dzięki temu widzisz w storybook co podałeś i możesz to zmieniać na bierząco)
  variant: "primary",
  // children: "Primary Args", // nie trzeba pisać osobno children bo jest zdefiniowane w args: {} na górze
};

export const SecodnaryA = Template.bind({});
SecodnaryA.args = {
  variant: "secondary",
  // children: "secondary Args",
};

// --- ROZSZERZANE / EXTENDING komponentów
export const SuccessA = Template.bind({});
SuccessA.args = {
  ...PrimaryA.args, // najpierw destrukturyzujesz propy które chccesz odziedziczyc
  children: "Success A", // potem dodajesz swoje nowe lub nadpisujesz te które zostały zdestrukturyzowane
};
