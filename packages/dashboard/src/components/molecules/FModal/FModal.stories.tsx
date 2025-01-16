import type { Meta, StoryFn } from "@storybook/react";

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FModal, { FModalProps } from "./FModal";

const meta = {
  title: "Molecules/Modal",
  component: FModal,
  parameters: {
    layout: "centered",
  },

  args: {
    title: "Título do Modal",
    children: <Typography>Conteúdo do modal</Typography>,
  },
} satisfies Meta<typeof FModal>;

export default meta;

export const Default: StoryFn<FModalProps> = (args) => {
  const [value, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
      <FModal {...args} isOpen={value} handleClose={handleClose} />
    </Box>
  );
};
