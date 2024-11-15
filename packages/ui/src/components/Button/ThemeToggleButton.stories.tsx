import ThemeToggleButton from "./ThemeToggleButton";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Button/ThemeToggleButton",
  component: ThemeToggleButton,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryObj<typeof ThemeToggleButton> = {
  render: () => <ThemeToggleButton />,
};

export const Default = Template;
