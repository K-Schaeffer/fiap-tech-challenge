import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  MenuListProps,
  useTheme,
} from "@mui/material";
import React from "react";

export type FMenuListItem = {
  label: string;
  path: string;
  current?: boolean;
};

type MenuVariant = "column" | "row";

interface FMenuListProps {
  options?: MenuListProps;
  variant?: MenuVariant;
  menuItems: FMenuListItem[];
  children: React.ReactElement;
}

export function FMenuList({
  options,
  variant = "column",
  menuItems,
  children,
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
            {React.cloneElement(children, {
              href: path,
              style: {
                color: current
                  ? "var(--mui-palette-tertiary-main)"
                  : isDarkTheme
                    ? "var(--mui-palette-primary-main)"
                    : "currentColor",
                fontWeight: variant === "row" ? 600 : current ? 700 : 400,
                textDecoration: "none",
              },
              children: label,
            })}
          </MenuItem>
          <Divider
            sx={{
              display: variant === "row" ? "none" : "inherit",
              borderColor: current
                ? "var(--mui-palette-tertiary-main)"
                : "auto",
            }}
          />
        </Box>
      ))}
    </MenuList>
  );
}
