# **Gestión de Cómics - Aplicación Web Progresiva (PWA)**

## **Descripción del Proyecto**

Este proyecto consiste en el desarrollo de una **Aplicación Web Progresiva (PWA)** que permite gestionar usuarios y realizar búsquedas de cómics de Marvel. La aplicación cuenta con dos funcionalidades principales:

- **Búsqueda de cómics**: Los usuarios pueden buscar cómics por título desde la API pública de Marvel.
- **Lista de usuarios aleatorios**: Se muestra una lista de usuarios aleatorios obtenidos desde una API externa.

La aplicación está construida con **React** y hace uso de **Material UI** para los componentes de la interfaz. Además, está optimizada como **PWA**, permitiendo una experiencia de usuario fluida incluso sin conexión a internet.

---

## **Pasos para Instalar y Ejecutar el Proyecto Localmente**

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/tu_usuario/gestor-comics.git


2. **Accede al directorio del proyecto**:
    ```bash
    cd gestor-comics
3. **Instala las dependencias**:
    ```bash
    npm install
4. **Ejecuta el proyecto localmente**:
    ```bash
    npm start
5. **Abre tu navegador y accede a http://localhost:5173**.

---

## **Tecnologías Utilizadas**

- **React**: Framework para la construcción de interfaces de usuario.
- **Material-UI**: Librería de componentes de interfaz de usuario basada en el sistema de diseño Material de Google.
- **React Router**: Para la gestión de rutas y navegación entre diferentes vistas de la aplicación.
- **Fetch API**: Para realizar las peticiones HTTP a la API de Marvel.
- **Service Workers**: Para habilitar las funcionalidades de PWA y permitir el uso de la aplicación offline.
- **Netlify**: Para el despliegue y publicación de la aplicación web.

---

## **Enlace al Proyecto Publicado en Netlify**

**Puedes ver el proyecto en vivo haciendo clic en el siguiente enlace**:
    ```bash
   https://pt-user-profile.netlify.app

Ver el proyecto en Netlify

---

## **Desafíos Enfrentados y Cómo los Solucioné**

- **Problemas con la autenticación en la API de Marvel**:
Durante el proceso de integración con la API de Marvel, tuve dificultades con el manejo de la autenticación y la generación de los hashes requeridos.
- **Solución**: Leí la documentación de la API y utilicé la librería md5 para generar el hash necesario, integrando correctamente las claves API y las credenciales en el código.
- **Optimización para PWA**:
Convertir la aplicación en una PWA presentó algunos desafíos relacionados con la configuración de los Service Workers y el manejo del caché para que la aplicación funcionara sin conexión.
- **Solución**: Utilicé un serviceWorker.js simple y configuré la opción de caché de manera adecuada. También me aseguré de que los recursos críticos de la aplicación estuvieran disponibles en el modo offline.
- **Integración con Material-UI**:
Durante el desarrollo de la interfaz, enfrenté dificultades al personalizar los componentes de Material-UI para que se adaptaran completamente a la estética que buscaba.
- **Solución**: Consulté la documentación de Material-UI y utilicé los temas personalizados para ajustar los estilos y mejorar la experiencia de usuario.

---

## **Gracias por tu atencion!!**

