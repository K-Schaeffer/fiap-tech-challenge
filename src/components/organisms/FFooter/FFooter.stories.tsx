import FFooter from "@/components/organisms/FFooter/FFooter";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Organisms/Footer",
    component: FFooter,
    parameters: {
        layout: "padded",
        isDark: true
    },
} satisfies Meta<typeof FFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        listService: ["Conta corrente", "Conta PJ", "Cartão de crédito"],
        listContact: ["0800 004 250 08", "meajuda@bytebank.com.br", "ouvidoria@bytebank.com.br"],
    },
};