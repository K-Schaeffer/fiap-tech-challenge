import { Button, ButtonProps, Typography, Box } from "@mui/material";

interface FButtonProps {
  innerText?: string;
  options?: ButtonProps;
}

export default function FButton(props: FButtonProps) {
  return (
    <Button {...props.options} style={{textTransform: 'none', padding: 0, borderRadius: 8, maxHeight: 48 }}>
      { props.innerText &&  
        <Box padding={2}>
          <Typography variant="body1" fontWeight={600}>
            {props.innerText}
          </Typography>
        </Box>
      }
    </Button>
  );
}