import { Box, Divider, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";

interface FMenuListProps {
  menuItems: {
    label: string;
    path: string;
    current?: boolean;
  }[];
}

export default function FMenuList({ menuItems }: FMenuListProps) {
  const isLastItem = (index: number) => index + 1 === menuItems.length;

  return (
    <MenuList>
      {menuItems.map(({ label, path, current }, index) => (
        <Box key={`menu-item-${index}`}>
          <MenuItem
            key={`menu-item-${index}`}
            sx={{ justifyContent: "center" }}
          >
            <Link
              href={path}
              style={{
                color: current
                  ? "var(--mui-palette-primary-main)"
                  : "currentColor",
                fontWeight: current ? 700 : 400,
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          </MenuItem>
          <Divider
            sx={{
              display: isLastItem(index) ? "none" : "inherit",
            }}
          />
        </Box>
      ))}
    </MenuList>
  );
}
