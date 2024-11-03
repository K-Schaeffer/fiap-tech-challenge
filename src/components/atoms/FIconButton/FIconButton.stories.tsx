import type { Meta, StoryObj } from '@storybook/react';

import FIconButton from './FIconButton';
import { DeleteTwoTone, EditTwoTone } from "@mui/icons-material";

const meta = {
  title: 'Atoms/IconButton',
  component: FIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    variant: 'plain',
    children: <DeleteTwoTone />
  }
};

export const Fancy: Story = {
  args: {
    variant: 'fancy',
    children: <EditTwoTone />
  }
};
