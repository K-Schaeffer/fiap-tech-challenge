import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { FInputFile } from "./FInputFile";

const meta: Meta<typeof FInputFile> = {
  title: "Atoms/FInputFile",
  component: FInputFile,
  parameters: {
    layout: "centered",
  },
  args: { onUploadFile: action("file-uploaded") },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    innerText: "Upload files",
    options: {
      variant: "contained",
      color: "primary",
    },
  },
};
