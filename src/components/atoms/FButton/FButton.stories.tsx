import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import FButton from './FButton';

const meta = {
  title: 'Atoms/Button',
  component: FButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
  tags: ['autodocs'],
} satisfies Meta<typeof FButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    innerText: 'Hello world!',
    options: {
      variant: 'contained',
      color: 'primary'
    },
  },
};

export const Secondary: Story = {
  args: {
    innerText: 'Hello world!',
    options: {
      variant: 'contained',
      color: 'secondary'
    },
  },
};

export const PrimaryDark: Story = {
  parameters: {
    isDark: true,
  },
  args: {
    innerText: 'Hello world!',
    options: {
      variant: 'contained',
      color: 'primary'
    },
  },
};

export const OutlinedDark: Story = {
  parameters: {
    isDark: true,
  },
  args: {
    innerText: 'Hello world!',
    options: {
      variant: 'outlined',
      color: 'primary'
    },
  },
};


