import { IconButton } from '@mui/material';
import {
  AccountCircleTwoTone,
  DeleteTwoTone,
  EditTwoTone,
  VisibilityTwoTone,
  MenuTwoTone
} from '@mui/icons-material';

const Icons = {
  avatar: AccountCircleTwoTone,
  delete: DeleteTwoTone,
  edit: EditTwoTone,
  eye: VisibilityTwoTone,
  menu: MenuTwoTone
};

export type IconName = keyof typeof Icons;

interface FIconProps {
  icon: IconName;
  onClick?: () => void;
}

export default function FIcon({ icon, onClick }: FIconProps) {
  const IconComponent = Icons[icon];

  return (
    <IconButton onClick={onClick}>
      {IconComponent ? <IconComponent /> : null}
    </IconButton>
  );
}
