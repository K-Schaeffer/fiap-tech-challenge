"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, useTheme } from "@mui/material";
import { useState } from "react";
import FMenuList from "../FMenuList/FMenuList";

interface FMenuDropdownProps {
  menuItems: {
    label: string;
    path: string;
    current?: boolean;
  }[];
}

export default function FMenuDropdown({ menuItems }: FMenuDropdownProps) {
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
    <Box>
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
        <FMenuList menuItems={menuItems} />
      </Menu>
    </Box>
  );
}
