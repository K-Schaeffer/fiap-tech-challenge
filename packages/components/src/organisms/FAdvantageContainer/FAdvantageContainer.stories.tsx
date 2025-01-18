import type { Meta, StoryObj } from "@storybook/react";

import { FAdvantageColumn } from "@molecules/FAdvantageColumn/FAdvantageColumn";
import { FAdvantageContainer } from "./FAdvantageContainer";

const meta = {
  title: "Organisms/AdvantageContainer",
  component: FAdvantageContainer,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof FAdvantageContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <FAdvantageColumn title="Title" description="Description.">
        <img src="" alt="Image here" />
      </FAdvantageColumn>,
      <FAdvantageColumn title="Title" description="Description.">
        <img src="" alt="Image here" />
      </FAdvantageColumn>,
      <FAdvantageColumn title="Title" description="Description.">
        <img src="" alt="Image here" />
      </FAdvantageColumn>,
      <FAdvantageColumn title="Title" description="Description.">
        <img src="" alt="Image here" />
      </FAdvantageColumn>,
    ],
  },
};
