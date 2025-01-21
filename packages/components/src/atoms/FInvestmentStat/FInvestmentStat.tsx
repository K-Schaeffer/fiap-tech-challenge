import { Paper, Typography } from '@mui/material';
import { ReactElement } from 'react';

interface InvestmentStatProps {
    label?: string;
    value?: string;
    backgroundColor?: string;
    children?: ReactElement;
}

export const FInvestmentStat = ({ label, value, backgroundColor, children }: InvestmentStatProps) => (
    <Paper sx={{
        padding: 2,
        backgroundColor,
        color: 'white',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px"
    }}>
        <Typography variant="caption">{label}</Typography>
        <Typography variant="h6">{value}</Typography>
        {children}
    </Paper>
);
