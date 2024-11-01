// src/components/stories/SelectInput.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import SelectInput from './FSelectInput';
import { MenuItem } from '@mui/material';

const meta: Meta<typeof SelectInput> = {
    title: 'Components/SelectInput',
    component: SelectInput,
    argTypes: {
        formControlOptions: {
            control: {
                type: 'object',
            },
            description: 'Opções para o FormControl',
        },
        selectOptions: {
            control: {
                type: 'object',
            },
            description: 'Opções para o Select',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        formControlOptions: {
            style: { color: '#004D61' },
        },
        selectOptions: {
            children: [
                <MenuItem key="cambio" value="cambio">Câmbio de Moeda</MenuItem>,
                <MenuItem key="doc-ted" value="doc-ted">DOC/TED</MenuItem>,
                <MenuItem key="emprestimo-financiamento" value="emprestimo-financiamento">Empréstimo e Financiamento</MenuItem>,
            ],
        },
    },
};

export const CustomColor: Story = {
    args: {
        formControlOptions: {
            style: { color: '#FF5031' },
        },
        selectOptions: {
            children: [
                <MenuItem key="cambio" value="cambio">Câmbio de Moeda</MenuItem>,
                <MenuItem key="doc-ted" value="doc-ted">DOC/TED</MenuItem>,
                <MenuItem key="emprestimo-financiamento" value="emprestimo-financiamento">Empréstimo e Financiamento</MenuItem>,
            ],
        },
    },
};

export const WithDifferentOptions: Story = {
    args: {
        formControlOptions: {
            style: { color: '#004D61' },
        },
        selectOptions: {
            children: [
                <MenuItem key="option1" value="option1">Opção 1</MenuItem>,
                <MenuItem key="option2" value="option2">Opção 2</MenuItem>,
                <MenuItem key="option3" value="option3">Opção 3</MenuItem>,
            ],
        },
    },
};
