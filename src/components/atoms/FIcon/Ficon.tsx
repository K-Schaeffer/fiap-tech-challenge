import { Button, ButtonProps, Box } from "@mui/material";
import { icons, IconName } from "./icons";

interface IconButtonProps {
  icon: IconName;
  options?: ButtonProps;
  onClick?: () => void;
}

export default function FIcon(props: IconButtonProps) {
  const { icon, options} = props;

  return (
    <Button 
      {...options} 
      style={{ display: 'inline-flex', alignItems: 'center'}}
      onClick={props.onClick}
    >
      <Box component="span" style={{ display: 'inline-block' }}>
        <img 
          src={icons[icon]}
          style={{ display: 'block' }} 
        />
      </Box>
    </Button>
  );
}
