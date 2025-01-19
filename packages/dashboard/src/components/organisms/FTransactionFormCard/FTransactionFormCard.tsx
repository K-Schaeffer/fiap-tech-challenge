import FTransactionForm, {
  FTransactionFormProps,
} from "@/components/molecules/FTransactionForm/FTransactionForm";
import { Box } from "@mui/material";
import { FCard } from "components";
import Image from "next/image";
import styles from "./FTransactionFormCard.styles";

export default function FTransactionFormCard({
  accountBalance,
  addTransaction,
}: FTransactionFormProps) {
  return (
    <FCard
      title="Nova transação"
      variant="light"
      options={{
        sx: {
          height: "600px",
          position: "relative",
        },
      }}
    >
      <Box
        sx={{
          ...styles.commonImage,
          ...styles.bottomPixelsImage,
        }}
      >
        <Image src="/assets/card-pixels-3.svg" alt="" layout="fill" />
      </Box>
      <Box
        sx={{
          ...styles.commonImage,
          ...styles.topPixelsImage,
        }}
      >
        <Image src="/assets/card-pixels-4.svg" alt="" layout="fill" />
      </Box>
      <Box
        sx={{
          ...styles.commonImage,
          bottom: 0,
          right: 0,
          width: "327px",
          height: "231px",
        }}
      >
        <Image src="/assets/card-illustration-2.svg" alt="" layout="fill" />
      </Box>

      <Box width={{ xs: "100%", sm: "70%" }}>
        <FTransactionForm
          accountBalance={accountBalance}
          addTransaction={addTransaction}
          buttonText="Concluir transação"
        />
      </Box>
    </FCard>
  );
}
