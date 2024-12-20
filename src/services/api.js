/**
 * Servicio para interactuar con la API pública Random User.
 * @returns {Promise<Object>} Retorna un objeto con los datos del usuario.
 */
export const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) throw new Error('Error al obtener los datos del usuario.');
      const data = await response.json();
      return data.results[0];
    } catch (error) {
      console.error('Error en fetchRandomUser:', error);
      throw error;
    }
  };
  