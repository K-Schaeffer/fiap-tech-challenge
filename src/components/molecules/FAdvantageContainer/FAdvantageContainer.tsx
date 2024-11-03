import { Grid2, Typography } from "@mui/material";
import FCard from '@/components/molecules/FAdvantageContainer/FCard';



export default function FAdvantageContainer() {
    return (
        <Grid2 spacing={2} container columns={12} style={{ width: '90%', margin: "0 auto" }}>
            <Grid2 container size={12} component="div" justifyContent="center">
                <Typography variant='h5' align='center' fontWeight="bold" color='#000000'>Vantagens do nosso banco:</Typography>
            </Grid2>
            <FCard imgPathName="GiftBox" title="Conta e cartão gratuitos" description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."/>
            <FCard imgPathName="Exchange" title="Saques sem custo" description="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."/>
            <FCard imgPathName="Star" title="Programa de pontos" description="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"/>
            <FCard imgPathName="Devices" title="Seguro dispositivos" description="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."/>

        </Grid2>
    )
}