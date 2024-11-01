import type { Meta, StoryObj } from '@storybook/react';

import FIcon from './Ficon';

const meta = {
  title: 'Atoms/Icon',
  component: FIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: {
    icon: 'avatar'
  }
};

export const Delete: Story = {
  args: {
    icon: 'delete'
  }
};

export const Edit: Story = {
  args: {
    icon: 'edit'
  }
};

export const Menu: Story = {
  args: {
    icon: 'menu'
  }
};

export const Olho: Story = {
    args: {
      icon: 'olho'
    }
  };
