import React from 'react';
import { Card, CardContent, Typography, Avatar, Stack } from '@mui/material';

/**
 * Componente que muestra información del usuario.
 * @param {Object} user - Objeto con los datos del usuario.
 * @returns {JSX.Element} Tarjeta con los detalles del usuario.
 */
const UserCard = ({ user }) => {
  const { name, email, phone, location, picture } = user;

  return (
    <Card sx={{ maxWidth: 400, margin: '16px auto', padding: '16px', textAlign: 'center' }}>
      <Avatar
        src={picture.large}
        alt={`${name.first} ${name.last}`}
        sx={{ width: 100, height: 100, margin: '0 auto 16px' }}
      />
      <CardContent>
        <Typography variant="h5">{`${name.title} ${name.first} ${name.last}`}</Typography>
        <Typography color="textSecondary">{email}</Typography>
        <Typography color="textSecondary">{phone}</Typography>
        <Typography color="textSecondary">{`${location.city}, ${location.country}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
