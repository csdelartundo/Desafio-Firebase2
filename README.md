# Demo de Aplicación Web con Autenticación

## Descripción

Este proyecto es una demostración de una aplicación web que implementa un sistema de autenticación utilizando **Vue.js** y **Firebase Authentication**. La aplicación contiene tres vistas principales: **Sign Up**, **Login**, y **Home**. 

- **Vista Sign Up**: Esta vista es pública y está destinada a usuarios que no están registrados. Permite a los nuevos usuarios registrarse completando un formulario de registro.
  
- **Vista Login**: También pública, permite a los usuarios registrados iniciar sesión en la aplicación. Los usuarios que no están logueados serán redirigidos a esta vista.

- **Vista Home**: Esta vista es privada y solo accesible para usuarios autenticados. Si un usuario no autenticado intenta acceder a ella, será redirigido automáticamente a la vista **Sign Up**.

## Requerimientos

Este proyecto cumple con los siguientes requerimientos:

1. **Integración de Firebase Authentication**: Utiliza Firebase Authentication para gestionar el registro e inicio de sesión de los usuarios.
  
2. **Guardianes de Vue Router**: Implementa guardianes en Vue Router para restringir el acceso a la vista **Home**. Solo los usuarios autenticados pueden acceder a esta vista.

3. **Componente de Registro**: Incluye un componente que permite a los nuevos usuarios crear una cuenta.

4. **Componente de Inicio de Sesión**: Proporciona un componente para que los usuarios registrados inicien sesión.

5. **Despliegue en Firebase Hosting**: Incluye la configuración necesaria para realizar el build de producción y desplegar la aplicación en Firebase Hosting.
