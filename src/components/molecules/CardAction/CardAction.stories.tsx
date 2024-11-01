import type { Meta, StoryObj } from '@storybook/react';

import CardAction from './CardAction';

const meta = {
  title: 'Atoms/Icon',
  component: CardAction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Action: Story = {
  args: {
    icon1: 'edit',
    icon2: 'delete'
  }
};
