import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

/**
 * Componente de encabezado para la aplicación.
 * @returns {JSX.Element} Encabezado estilizado.
 */
const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Random User Generator
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
