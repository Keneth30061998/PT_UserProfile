import React from 'react';
import { Alert } from '@mui/material';

/**
 * Componente que muestra un mensaje de error.
 * @param {string} message - Mensaje de error a mostrar.
 * @returns {JSX.Element} Alerta estilizada.
 */
const ErrorMessage = ({ message }) => (
  <Alert severity="error" sx={{ maxWidth: 400, margin: '16px auto', textAlign: 'center' }}>
    {message}
  </Alert>
);

export default ErrorMessage;
