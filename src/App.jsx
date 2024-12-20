import React, { useState, useEffect } from 'react';
import { Container, CircularProgress } from '@mui/material';
import Header from './components/Header';
import ErrorMessage from './components/ErrorMessage';
import UserCard from './components/UserCard';
import { fetchRandomUser } from './services/api';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchRandomUser();
        setUser(data.results[0]);
      } catch (err) {
        setError('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      {loading && <CircularProgress />}
      {error && <ErrorMessage message={error} />}
      {user && <UserCard user={user} />}
    </Container>
  );
};

export default App;
