"use client";
import { FMenuList } from "@molecules/FMenuList/FMenuList";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, BoxProps, IconButton, Menu, useTheme } from "@mui/material";
import { useState } from "react";

interface FMenuDropdownProps {
  options?: BoxProps;
  menuItems: {
    label: string;
    path: string;
    current?: boolean;
  }[];
  children: React.ReactElement;
}

export function FMenuDropdown({
  options,
  menuItems,
  children,
}: FMenuDropdownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isDarkTheme = useTheme().palette.mode === "dark";

  return (
    <Box {...options}>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon color={isDarkTheme ? "primary" : "secondary"} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { minWidth: "172px", padding: 2 },
        }}
      >
        <FMenuList menuItems={menuItems}>{children}</FMenuList>
      </Menu>
    </Box>
  );
}
