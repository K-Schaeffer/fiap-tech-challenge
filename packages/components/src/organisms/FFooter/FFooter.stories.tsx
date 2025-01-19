import type { Meta, StoryObj } from "@storybook/react";
import { FFooter } from "./FFooter";

const meta = {
  title: "Organisms/Footer",
  component: FFooter,
  parameters: {
    layout: "padded",
    isDark: true,
  },
} satisfies Meta<typeof FFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <img src="" alt="Image" />{" "}
      </>
    ),
  },
};
