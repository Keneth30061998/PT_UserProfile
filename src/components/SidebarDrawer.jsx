import React from 'react';
import { Drawer, Box, Typography, Avatar } from '@mui/material';

const SidebarDrawer = ({ open, onClose, user }) => {
  return (
    <>
      {/* Drawer principal */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            width: open ? 240 : 0,
            transition: 'width 0.3s ease',
            overflowX: 'hidden', // Oculta contenido cuando el drawer está cerrado
            boxShadow: open ? '2px 0 5px rgba(0, 0, 0, 0.1)' : 'none', // Sombra visible
          },
        }}
        aria-label="Menú lateral"
      >
        {user && (
          <Box sx={{ padding: 2, textAlign: 'center' }}>
            <Avatar
              src={user?.picture?.large}
              alt={user?.name?.first || 'Usuario'}
              sx={{ width: 100, height: 100, margin: '0 auto 16px' }}
            />
            <Typography variant="h6">{user?.name?.first || 'Invitado'}</Typography>
            <Typography variant="body2" color="textSecondary">
              {user?.email || 'Sin correo disponible'}
            </Typography>
          </Box>
        )}
      </Drawer>

      {/* Franja para arrastrar y abrir el drawer */}
      {!open && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '16px', // Ancho de la franja
            backgroundColor: 'grey.300',
            cursor: 'pointer',
            '&:hover': { backgroundColor: 'grey.400' }, // Cambio de color al pasar el mouse
          }}
          role="button"
          aria-label="Abrir menú lateral"
          onMouseEnter={onClose} // Abre el drawer al pasar el mouse
        />
      )}
    </>
  );
};

export default SidebarDrawer;
