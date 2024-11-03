import FTransactionForm from "@/components/molecules/FTransactionForm/FTransactionForm";
import { Box } from "@mui/material";
import Image from "next/image";

export default function FFormTransaction() {
  return (
    <Box
      sx={{
        width: { md: "691px", sm: "600px", xs: "312px" },
        height: { md: "478px", sm: "478px", xs: "633px" },
        backgroundColor: "#CBCBCB",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          zIndex: 1,
          right: { xs: 0 },
          left: { sm: 0, md: 0 },
          width: { md: "180px", sm: "180px", xs: "146px" },
          height: { md: "177px", sm: "177px", xs: "144px" },
        }}
      >
        <Image src="/assets/card-pixles-3.svg" alt="" layout="fill" />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          marginTop: "32px",
          marginLeft: { md: "32px", sm: "32px", xs: "16px" },
        }}
      >
        <FTransactionForm />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          zIndex: 1,
          right: { sm: 0, md: 0 },
          width: { md: "180px", sm: "180px", xs: "146px" },
          height: { md: "177px", sm: "177px", xs: "144px" },
        }}
      >
        <Image src="/assets/card-pixels-4.svg" alt="" layout="fill" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 1,
          display: { md: "none", sm: "show", xs: "show" },
          marginBottom: { md: "24px", sm: "24px", xs: "27px" },
          width: { sm: "327px", xs: "280px" },
          height: { sm: "231px", xs: "231px" },
        }}
      >
        <Image src="/assets/card-illustration-2.svg" alt="" layout="fill" />
      </Box>
    </Box>
  );
}
