import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ComicCard = ({ title, thumbnail, description }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      {/* Imagen del cómic */}
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={thumbnail}
        sx={{
          objectFit: 'cover', // Asegura que la imagen se recorte correctamente
        }}
      />
      <CardContent>
        {/* Título */}
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        {/* Descripción */}
        <Typography variant="body2" color="text.secondary">
          {description || 'Sin descripción disponible.'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ComicCard;
