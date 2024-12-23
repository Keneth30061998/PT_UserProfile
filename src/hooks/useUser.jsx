import { useState, useEffect } from 'react';
import { getUsers } from '../services/userService'; // Servicio para obtener usuarios

export const useUsers = () => {
  const [users, setUsers] = useState([]);  // Estado para los usuarios
  const [loading, setLoading] = useState(true);  // Estado de carga
  const [error, setError] = useState(null);  // Estado de error

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await getUsers();  // Llamada al servicio para obtener usuarios
        setUsers(data);  // Asegura que siempre sea un array
      } catch (err) {
        setError(err.message || 'Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();  // Ejecuta la llamada a la API al montar el componente
  }, []);  // Solo se ejecuta una vez al montar el componente

  return { users, loading, error };
};
