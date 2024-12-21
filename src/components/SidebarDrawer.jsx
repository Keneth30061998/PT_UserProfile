import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const SidebarDrawer = ({ open, onClose, user }) => {
  // Estado para controlar la apertura del submenú
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleSubMenuClick = () => {
    setOpenSubMenu(!openSubMenu); // Alternar el submenú
  };

  return (
    <>
      {/* Drawer principal */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            width: open ? 240 : 0,
            transition: "width 0.3s ease",
            overflowX: "hidden", // Ocultar contenido cuando el drawer está cerrado
          },
        }}
      >
        {user && (
          <Box sx={{ padding: 2, textAlign: "center" }}>
            <Avatar
              src={user.picture?.medium || "default-avatar-url"} // Agregar URL por defecto
              alt={user.name?.first || "User"} // Comprobación de nombre
              sx={{ width: 100, height: 100, margin: "0 auto 16px" }}
            />
            <Typography variant="h6">
              {user.name?.first || "Anonymous"}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email || "No Email"}
            </Typography>
          </Box>
        )}

        {/* Menú con submenú */}
        <List>
          <ListItem onClick={handleSubMenuClick}>
            <ListItemText primary="Main Menu" />
            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem sx={{ paddingLeft: 4 }}>
                <ListItemText primary="Sub Item 1" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 4 }}>
                <ListItemText primary="Sub Item 2" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>

      {/* Franja para arrastrar y abrir el drawer */}
      {!open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "16px", // Ancho de la franja
            backgroundColor: "grey.300",
            cursor: "pointer",
            zIndex: 1200,
          }}
          onClick={onClose} // Cambié el evento a onClick
        />
      )}
    </>
  );
};

export default SidebarDrawer;
