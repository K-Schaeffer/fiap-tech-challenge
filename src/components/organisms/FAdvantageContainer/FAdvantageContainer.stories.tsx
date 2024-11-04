import type { Meta, StoryObj } from "@storybook/react";

import FAdvantageContainer from "./FAdvantageContainer";

const meta = {
  title: "Organisms/AdvantageContainer",
  component: FAdvantageContainer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAdvantageContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgPathName: "/assets/Devices.svg",
    title: "Foo",
    description: "Lorem ipsum dolor sit amet, consectet",
    alt: "Beautiful device image",
  },
};
