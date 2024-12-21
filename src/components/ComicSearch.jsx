import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ComicSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        maxWidth: 400,
        margin: '0 auto',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <TextField
        label="Ingrese un título"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ backgroundColor: 'white' }} // Fondo blanco para el campo de texto
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Buscar
      </Button>
    </Box>
  );
};

export default ComicSearch;
