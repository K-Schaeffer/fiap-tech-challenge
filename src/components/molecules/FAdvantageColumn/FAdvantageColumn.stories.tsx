import type { Meta, StoryObj } from "@storybook/react";

import FAdvantageColumn from "./FAdvantageColumn";

const meta = {
  title: "Molecules/AdvantageColumn",
  component: FAdvantageColumn,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FAdvantageColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgPathName:
      "https://raw.githubusercontent.com/K-Schaeffer/fiap-tech-challenge/45e3561814db71db9889bae4c125dabf49cee20e/public/assets/Devices.svg",
    title: "Foo",
    description: "Lorem ipsum dolor sit amet, consectet",
    alt: "Beautiful device image",
  },
};
