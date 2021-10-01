import React from "react";

import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
  name: "Something",
  category: "Something",
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  name: "Something",
};
