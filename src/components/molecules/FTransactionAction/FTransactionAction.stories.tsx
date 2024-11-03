import type { Meta, StoryObj } from '@storybook/react';

import FTransactionAction from './FTransactionAction';

const meta = {
  title: 'Molecules/TransactionAction',
  component: FTransactionAction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FTransactionAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Action: Story = {};
