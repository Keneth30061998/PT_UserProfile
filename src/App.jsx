import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Container } from '@mui/material';
import { fetchRandomUser } from './services/api';
import Header from './components/Header';
import UserCard from './components/UserCard';
import ErrorMessage from './components/ErrorMessage';

/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} Interfaz principal de la aplicación.
 */
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Obtiene un usuario aleatorio y actualiza el estado.
   */
  const loadUser = async () => {
    setLoading(true);
    setError('');
    try {
      const userData = await fetchRandomUser();
      setUser(userData);
    } catch (err) {
      setError('No se pudo cargar el usuario. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <Header />
      <Container sx={{ textAlign: 'center', marginTop: 4 }}>
        {error && <ErrorMessage message={error} />}
        {loading && <CircularProgress />}
        {!loading && user && <UserCard user={user} />}
        <Button
          variant="contained"
          color="primary"
          onClick={loadUser}
          sx={{ marginTop: 2 }}
          disabled={loading}
        >
          Generar Nuevo Usuario
        </Button>
      </Container>
    </div>
  );
}

export default App;
