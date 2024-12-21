import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import UserListPage from './pages/UserListPage';  // Importación de la página principal
import { CssBaseline } from '@mui/material';      // Importación de MUI para diseño base
import Header from './components/Header';         // Importación del encabezado

const App = () => {
  return (
    <Router>  {/* Se configura el enrutamiento de la aplicación */}
      <CssBaseline /> {/* Aplica el estilo base de Material UI */}
      <Routes>  {/* Define las rutas de la aplicación */}
        <Route path="/" element={<UserListPage/>} />  {/* Ruta para la lista de usuarios */}
        {/* Puedes agregar más rutas según las vistas que necesites */}
      </Routes>
    </Router>
  );
};

export default App;
