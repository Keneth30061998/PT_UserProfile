// pages/UserListPage.jsx
import React, { useState } from "react";
import {
  Container,
  CircularProgress,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useUsers } from "../hooks/useUser";
import SidebarDrawer from "../components/SidebarDrawer";
import Header from "../components/Header";

const UserListPage = () => {
  const { users, loading, error } = useUsers();
  const [drawerOpen, setDrawerOpen] = useState(true); // El drawer comienza abierto
  const [selectedUser, setSelectedUser] = useState(null);

  const handleToggleDrawer = () => setDrawerOpen((prev) => !prev);
  const handleOpenDrawer = () => setDrawerOpen(true); // Función para abrir directamente el drawer

  // Selecciona un usuario al cargar los datos
  React.useEffect(() => {
    if (users && users.length > 0) {
      setSelectedUser(users[0]); // Establece el primer usuario como predeterminado
    }
  }, [users]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      {/* El Header se adapta al estado del drawer */}
      <Header drawerOpen={drawerOpen} />

      {/* SidebarDrawer con franja para abrir */}
      <SidebarDrawer
        open={drawerOpen}
        onClose={handleOpenDrawer}
        user={selectedUser}
      />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: drawerOpen ? "240px" : "16px", // Ajusta el margen según el estado del drawer
          transition: "margin 0.3s ease",
          position: "relative", // Asegura que se posicionen correctamente respecto al Header
          marginTop: "64px", // Desplazamos el contenido principal hacia abajo para no quedar cubierto por el header
          zIndex: 1, // Para asegurar que no quede por debajo del Header si es necesario
        }}
      >
        <Typography variant="h4">Contenido Principal</Typography>
      </Box>
    </Box>
  );
};

export default UserListPage;
