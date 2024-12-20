import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: '16px auto' }}>
      <CardContent>
        <Avatar
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          sx={{ width: 100, height: 100, margin: '0 auto' }}
        />
        <Typography variant="h6" align="center">
          {user.name.first} {user.name.last}
        </Typography>
        <Typography variant="body1" align="center">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
