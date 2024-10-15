import { Button, ButtonProps, Typography } from "@mui/material";

interface FButtonProps {
  innerText?: string;
  options?: ButtonProps;
}

export default function FButton(props: FButtonProps) {
  return (
    <Button {...props.options}>
      { props.innerText &&  
        <Typography variant="body1" fontWeight={700}>
          {props.innerText}
        </Typography>
      }
    </Button>
  );
}
