"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, BoxProps, IconButton, Menu, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import FMenuList from "../FMenuList/FMenuList";

interface FMenuDropdownProps {
  options?: BoxProps;
  menuItems: {
    label: string;
    path: string;
    current?: boolean;
  }[];
}

export default function FMenuDropdown({
  options,
  menuItems,
}: FMenuDropdownProps) {
  const pathname = usePathname();

  const items = menuItems.map((item) => ({
    ...item,
    current: item.path === pathname,
  }));

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
          sx: { minWidth: "172px" },
        }}
      >
        <FMenuList menuItems={items} />
      </Menu>
    </Box>
  );
}
