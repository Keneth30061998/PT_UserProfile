import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: '20px 0' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" paragraph>
          © {new Date().getFullYear()} Marvel Comics. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" paragraph>
          Aplicación creada por Keneth Alfonso Escobar Parra.{' '}
          <Link href="https://github.com/KenethEscobar" color="inherit" target="_blank">
            GitHub
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link href="/terms-of-service" color="inherit">
            Términos y Condiciones
          </Link>{' | '}
          <Link href="/privacy-policy" color="inherit">
            Política de Privacidad
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
