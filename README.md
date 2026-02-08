🛡️ Proyecto Final de Calidad del Software

Software Testing Suite: Cypress, Katalon & Postman

Este repositorio contiene la suite de pruebas automatizadas desarrollada para la plataforma Restful Booker Platform (https://automationintesting.online/).

El proyecto integra pruebas de extremo a extremo (E2E), funcionales y de API, cubriendo flujos críticos de negocio, validaciones de seguridad y manejo de errores.

🛠️ Tecnologías y Cobertura

1. Cypress (E2E Testing)

Scripts modulares ubicados en la carpeta /Pruebas Cypress. Se implementaron patrones de diseño como Hooks (beforeEach) para optimizar la reutilización de código y mantener las pruebas limpias.

Archivo

Descripción de Escenarios (CPs)

01_Auth_Testing.cy.js

Seguridad: Login exitoso/fallido y Logout. Incluye un workaround técnico para manejar un Bug 500 del servidor al cerrar sesión.

02_Admin_Management.cy.js

Gestión Admin: CRUD de habitaciones. Incluye validación negativa (impedir creación sin precio) y limpieza automática de datos post-prueba.

03_Public_Frontend.cy.js

Experiencia de Usuario: Formulario de contacto, validación visual de UI, navegación y lógica de reservas fallidas.

2. Postman (API Testing)

Colección completa con 10 Checkpoints (CP-01 a CP-10) para validar la API REST.

Ubicación: /Pruebas Postman/Pruebas.Restful Booker Platform

Características Avanzadas:

Auth Automática: Script en Tests para capturar el token de login y guardarlo en variables globales (token_hotel) para las siguientes peticiones.

Performance: Validaciones de tiempo de respuesta (<2000ms).

Cobertura: Métodos GET, POST, PUT, DELETE en endpoints de /room, /auth, /branding y /message.

3. Katalon Recorder (Grabación Funcional)

Scripts de automatización (.json) para la reproducción de flujos de usuario en el navegador, ubicados en /Pruebas Katalon.

Escenarios Automatizados:

crear-habitacion.json ➝ Flujo administrativo de alta de inventario.

enviar-mensaje.json ➝ Validación del formulario de contacto público.

login.json ➝ Autenticación de usuarios.

probar-enlaces.json ➝ Smoke test de navegación.

reservar-habitacion.json ➝ Flujo completo de reserva (Booking).

🚀 Instrucciones de Ejecución

Cypress

Instalar dependencias:

npm install


Abrir la interfaz de pruebas:

npx cypress open


Seleccionar E2E Testing y ejecutar los specs en el navegador de preferencia (Chrome/Electron).

Postman

Abrir Postman.

Importar el archivo .json desde la carpeta /Pruebas Postman.

Ejecutar la colección completa usando Collection Runner.

Nota: La colección gestiona automáticamente el token de sesión, no es necesario configurarlo manualmente.

Katalon

Instalar la extensión Katalon Recorder en tu navegador (Chrome/Firefox).

Abrir la extensión e importar los archivos .json de la carpeta /Pruebas Katalon.

Dar clic en Play Suite para reproducir las acciones grabadas.

🐛 Manejo de Errores Conocidos

Bug 500 en Logout: Se detectó que el servidor retorna un error interno (500) al cerrar sesión bajo ciertas condiciones.

Solución: El script de Cypress 01_Auth_Testing incluye una validación adaptada (cy.url().should...) para confirmar que, a pesar del error del servidor, la redirección al home sea correcta.

✒️ Autores

John Steven Lopez Velez

Ariel Gonzalo Moreira Macías
