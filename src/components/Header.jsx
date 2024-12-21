// components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ drawerOpen }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: drawerOpen ? `calc(100% - 240px)` : '100%', // Ajusta el ancho dependiendo del estado del drawer
        marginLeft: drawerOpen ? '240px' : '0', // Mueve el header si el drawer está abierto
        transition: 'width 0.3s ease, margin 0.3s ease', // Agrega animaciones suaves
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Mi Aplicación
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
