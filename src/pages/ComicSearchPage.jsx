import React, { useState, useCallback } from 'react';
import { TextField, Button, CircularProgress, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { fetchComicsByTitle } from '../services/marvelService';
import debounce from 'lodash.debounce';
import Footer from '../components/Footer'; // Importar el footer

const ComicSearchPage = () => {
  const [title, setTitle] = useState('');
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(
    debounce(async (query) => {
      if (!query) return;

      setLoading(true);
      setError(null);
      try {
        const fetchedComics = await fetchComicsByTitle(query);
        setComics(fetchedComics);
      } catch (err) {
        setError('Error al obtener los cómics');
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  const handleClear = () => {
    setTitle('');
    setComics([]);
    setError(null);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <Box sx={{ padding: 3, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>
        Buscar Cómics de Marvel
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: 500, margin: '0 auto' }}>
        <TextField
          label="Buscar cómics por título"
          variant="outlined"
          fullWidth
          value={title}
          onChange={handleChange}
          sx={{ backgroundColor: 'white' }}
        />
        <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => handleSearch(title)} 
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Buscar'}
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            onClick={handleClear} 
            fullWidth
          >
            Limpiar
          </Button>
        </Box>
      </Box>

      {error && <Typography color="error" variant="body1" sx={{ marginTop: 2 }}>{error}</Typography>}

      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        {comics.length > 0 ? (
          comics.map((comic) => (
            <Grid item xs={12} sm={6} md={4} key={comic.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={comic.title}
                  height="200"
                  image={comic.thumbnail}
                  title={comic.title}
                  loading="lazy"
                />
                <CardContent>
                  <Typography variant="h6">{comic.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {comic.description || 'No hay descripción disponible'}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ width: '100%', textAlign: 'center' }}>
            No se encontraron cómics.
          </Typography>
        )}
      </Grid>

      {/* Aquí se incluye el footer */}
      <Footer />
    </Box>
  );
};

export default ComicSearchPage;
