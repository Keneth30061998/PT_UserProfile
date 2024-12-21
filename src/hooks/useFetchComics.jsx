import { useState } from 'react';
import { fetchComicsByTitle } from '../services/marvelService';

const useFetchComics = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchComics = async (title) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchComicsByTitle(title);
      setComics(results);
    } catch (err) {
      setError('Error al buscar los cómics. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    comics,
    loading,
    error,
    searchComics,
  };
};

export default useFetchComics;
