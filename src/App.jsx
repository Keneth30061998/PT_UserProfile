import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import UserListPage from './pages/UserListPage';  // Importación de la página principal
import ComicSearchPage from './pages/ComicSearchPage'; 
import { CssBaseline } from '@mui/material';      // Importación de MUI para diseño base


const App = () => {
  return (
    <Router>  {/* Se configura el enrutamiento de la aplicación */}
      <CssBaseline /> {/* Aplica el estilo base de Material UI */}
      <Routes>  {/* Define las rutas de la aplicación */}
        <Route path="/" element={<UserListPage/>} />  {/* Ruta para la lista de usuarios */}
        {/* <Route path="/" element={<ComicSearchPage />} /> Página de cómics */}
        {/* Puedes agregar más rutas según las vistas que necesites */}
      </Routes>
    </Router>
  );
};

export default App;
