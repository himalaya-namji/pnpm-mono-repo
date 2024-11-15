import ThemedButton from "./ThemedButton";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/ThemedButton",
  component: ThemedButton,
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

const Template: StoryObj<typeof ThemedButton> = {
  render: () => <ThemedButton />,
};

export const Default = Template;
