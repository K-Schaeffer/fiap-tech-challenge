import type { Meta, StoryObj } from '@storybook/react';

import FIconButton from './FIconButton';

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
    children: 'VisibilityTwoTone'
  }
};

export const Fancy: Story = {
  args: {
    variant: 'fancy',
    children: 'EditTwoTone'
  }
};

/*export const Edit: Story = {
  args: {
    icon: 'edit'
  }
};

export const Eye: Story = {
  args: {
    icon: 'eye'
  }
};

export const Menu: Story = {
  args: {
    icon: 'menu'
  }
};*/
 