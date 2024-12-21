export const getUsers = async () => {
    // Realiza una petición GET a la API para obtener los usuarios
    const response = await fetch('https://randomuser.me/api/?results=10');
    
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Failed to fetch users');  // Lanza un error si la solicitud falla
    }
    
    // Retorna los datos de la respuesta
    const data = await response.json();
    return data.results;
  };
  