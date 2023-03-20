import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./Navbar";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {},
};
