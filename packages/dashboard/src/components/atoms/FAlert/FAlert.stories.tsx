import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import FButton from "../FButton/FButton";
import FAlert, { FAlertProps } from "./FAlert";

const meta: Meta<typeof FAlert> = {
  title: "Atoms/Alert",
  component: FAlert,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<typeof FAlert> = (args) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FButton
        options={{ variant: "contained", color: "primary" }}
        innerText="Open Alert"
        onClick={() => setOpen(true)}
      />
      <FAlert {...args} open={open} onClose={handleClose} />
    </>
  );
};

export const Success = (args: FAlertProps) => <Template {...args} />;
Success.args = {
  severity: "success",
  text: "This is a success alert",
};

export const Error = (args: FAlertProps) => <Template {...args} />;
Error.args = {
  severity: "error",
  text: "This is an error alert",
};

export const Warning = (args: FAlertProps) => <Template {...args} />;
Warning.args = {
  severity: "warning",
  text: "This is a warning alert",
};

export const Info = (args: FAlertProps) => <Template {...args} />;
Info.args = {
  severity: "info",
  text: "This is an info alert",
};
