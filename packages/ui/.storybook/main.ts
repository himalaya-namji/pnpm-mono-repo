import { StorybookConfig } from "@storybook/types"; // @storybook/types에서 StorybookConfig를 import

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"], // .stories.tsx 파일 경로
  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
  framework: "@storybook/react",
};

export default config;
