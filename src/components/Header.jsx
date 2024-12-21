import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Ícono de menú

const Header = ({ drawerOpen, handleToggleDrawer }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: drawerOpen ? `calc(100% - 240px)` : '100%', // Ajusta el ancho dependiendo del estado del drawer
        marginLeft: drawerOpen ? '240px' : '0', // Mueve el header si el drawer está abierto
        transition: 'width 0.3s ease, margin 0.3s ease',
        zIndex: 1300, // Asegura que el Header esté encima del contenido principal
      }}
    >
      <Toolbar>
        {/* Botón para abrir/cerrar el SidebarDrawer */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={handleToggleDrawer} // Función para alternar el estado del drawer
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap>
          Mi Aplicación
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
