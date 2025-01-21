import { PieChart } from '@mui/x-charts/PieChart';

export function FPieChart() {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 20, label: 'Fundos de investimento' },
                        { id: 1, value: 20, label: 'Tesouro Direto' },
                        { id: 2, value: 30, label: 'Previdência Privada' },
                        { id: 3, value: 30, label: 'Bolsa de Valores' },
                    ],
                },
            ]}
            width={400}
            height={200}
        />
    );
}