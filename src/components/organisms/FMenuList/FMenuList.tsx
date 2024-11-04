import { MenuItemType } from "@/types";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  MenuListProps,
  useTheme,
} from "@mui/material";
import Link from "next/link";

type MenuVariant = "column" | "row";

interface FMenuListProps {
  options?: MenuListProps;
  variant?: MenuVariant;
  menuItems: MenuItemType[];
}

export default function FMenuList({
  options,
  variant = "column",
  menuItems,
}: FMenuListProps) {
  const isDarkTheme = useTheme().palette.mode === "dark";

  return (
    <MenuList {...options}>
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
                  : isDarkTheme
                    ? "var(--mui-palette-primary-main)"
                    : "currentColor",
                fontWeight: variant === "row" ? 600 : current ? 700 : 400,
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          </MenuItem>
          <Divider
            sx={{
              display: variant === "row" ? "none" : "inherit",
              borderColor: current ? "var(--mui-palette-primary-main)" : "auto",
            }}
          />
        </Box>
      ))}
    </MenuList>
  );
}
