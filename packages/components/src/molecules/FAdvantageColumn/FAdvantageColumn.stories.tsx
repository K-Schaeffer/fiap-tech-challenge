import type { Meta, StoryObj } from "@storybook/react";

import { FAdvantageColumn } from "./FAdvantageColumn";

const meta = {
  title: "Molecules/AdvantageColumn",
  component: FAdvantageColumn,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FAdvantageColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Foo",
    description: "Lorem ipsum dolor sit amet, consectet",
    children: (
      <>
        <img src="" alt="Image here" />
      </>
    ),
  },
};
