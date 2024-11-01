import type { Meta, StoryObj } from '@storybook/react';

import FTransactionItem from './FTransactionItem';

const meta = {
  title: 'Molecules/TransactionItem',
  component: FTransactionItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FTransactionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: '2024-10-31',
    type: 'Depósito',
    value: 100
  },
};
