import React, { useState } from "react";
import { Container, CircularProgress, Typography, Box } from "@mui/material";
import { useUsers } from "../hooks/useUser";
import SidebarDrawer from "../components/SidebarDrawer";
import Header from "../components/Header";
import ComicSearchPage from "../pages/ComicSearchPage"; // Asegúrate de importar ComicSearchPage


const UserListPage = () => {
    const { users, loading, error } = useUsers();
    const [drawerOpen, setDrawerOpen] = useState(true); // El drawer comienza abierto
    const [selectedUser, setSelectedUser] = useState(null);
  
    const handleToggleDrawer = () => setDrawerOpen((prev) => !prev); // Alterna el estado del drawer
    const handleOpenDrawer = () => setDrawerOpen(true); // Función para abrir el drawer
  
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
        {/* Header recibe la función handleToggleDrawer como prop */}
        <Header drawerOpen={drawerOpen} handleToggleDrawer={handleToggleDrawer} />
  
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
            marginLeft: drawerOpen ? "240px" : "16px", 
            transition: "margin 0.3s ease",
            marginTop: "64px", 
            zIndex: 1, 
          }}
        >
          <Typography variant="h4" gutterBottom>
            Contenido Principal
          </Typography>
  
          {/* Aquí se agrega el componente ComicSearchPage */}
          <ComicSearchPage />
        </Box>
      </Box>
    );
  };
  
  export default UserListPage;
  