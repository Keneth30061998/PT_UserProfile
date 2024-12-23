import md5 from 'md5'; // Importar la librería md5

const API_BASE_URL = 'https://gateway.marvel.com/v1/public';
const API_KEY = '083e2f2717e6e7dd0d6b2ee70e775467'; // Clave pública
const PRIVATE_KEY = 'a8fb88c829f324005d77d389d360bdd21c45294f'; // Clave privada

// Función para obtener el hash
const getHash = (timestamp) => {
  return md5(timestamp + PRIVATE_KEY + API_KEY);
};

export const fetchComicsByTitle = async (title) => {
  const timestamp = new Date().getTime(); // Generar un timestamp único

  // Generar el hash
  const hash = getHash(timestamp);

  try { 
    const response = await fetch(`${API_BASE_URL}/comics?titleStartsWith=${title}&apikey=${API_KEY}&ts=${timestamp}&hash=${hash}`);
    const data = await response.json();
    
    if (!response.ok) throw new Error(data.status || 'Error al buscar cómics');

    return data.data.results.map((comic) => ({
      id: comic.id,
      title: comic.title,
      description: comic.description || 'No hay descripción disponible',
      thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`, // Construir URL del thumbnail
    }));
  } catch (error) {
    console.error('Error al obtener los cómics:', error);
    throw error;
  }
};
