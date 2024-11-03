import FAdvantageColumn from "@/components/molecules/FAdvantageColumn/FAdvantageColumn";
import { Grid2, Typography } from "@mui/material";

export default function FAdvantageContainer() {
  return (
    <Grid2
      spacing={2}
      container
      columns={12}
      style={{ width: "90%", margin: "0 auto" }}
    >
      <Grid2 container size={12} component="div" justifyContent="center">
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          color="#000000"
        >
          Vantagens do nosso banco:
        </Typography>
      </Grid2>
      <FAdvantageColumn
        imgPathName="/assets/GiftBox.svg"
        alt="Ícone de caixa de presente"
        title="Conta e cartão gratuitos"
        description="Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
      />
      <FAdvantageColumn
        imgPathName="/assets/Exchange.svg"
        alt="Ícone de mão entregando dinheiro"
        title="Saques sem custo"
        description="Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
      />
      <FAdvantageColumn
        imgPathName="/assets/Star.svg"
        alt="Ícone de estrela"
        title="Programa de pontos"
        description="Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
      />
      <FAdvantageColumn
        imgPathName="/assets/Devices.svg"
        alt="Ícone de diversas telas de diferentes dispositivos"
        title="Seguro dispositivos"
        description="Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
      />
    </Grid2>
  );
}
