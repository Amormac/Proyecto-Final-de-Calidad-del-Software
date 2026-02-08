# 🛡️ Proyecto Final – Calidad del Software

## Software Testing Suite: Cypress, Katalon & Postman

Este repositorio contiene la **suite de pruebas automatizadas** desarrollada para la plataforma **Restful Booker Platform**  
https://automationintesting.online/

El proyecto integra pruebas **End-to-End (E2E)**, **funcionales** y **de API**, cubriendo flujos críticos de negocio, validaciones de seguridad y manejo de errores conocidos.

---

## 🛠️ Tecnologías y Cobertura

### 1️⃣ Cypress – End-to-End Testing (E2E)

Las pruebas E2E están desarrolladas con **Cypress**, utilizando scripts modulares ubicados en la carpeta:

/Pruebas Cypress

Se aplican buenas prácticas como:
- Uso de Hooks (`beforeEach`)
- Reutilización de código
- Limpieza automática de datos post-ejecución

#### 📂 Archivos y Escenarios de Prueba (CPs)

| Archivo | Descripción |
|------|------------|
| **01_Auth_Testing.cy.js** | Seguridad: Login exitoso/fallido y Logout. Incluye un workaround técnico para manejar un Bug 500 del servidor durante el cierre de sesión. |
| **02_Admin_Management.cy.js** | Gestión Administrativa: CRUD de habitaciones. Incluye validaciones negativas (no permitir crear habitaciones sin precio) y limpieza automática de datos. |
| **03_Public_Frontend.cy.js** | Experiencia de Usuario: Validación del formulario de contacto, navegación, validaciones visuales de UI y lógica de reservas fallidas. |

---

### 2️⃣ Postman – API Testing

Colección completa de pruebas automatizadas para la API REST de la plataforma.

Ubicación:
/Pruebas Postman/Pruebas.Restful Booker Platform

#### 🔍 Cobertura

- 10 Checkpoints (CP-01 a CP-10)
- Métodos HTTP: GET, POST, PUT, DELETE
- Endpoints:
  - /auth
  - /room
  - /branding
  - /message

#### ⚙️ Características Avanzadas

- Autenticación automática mediante captura del token de login y almacenamiento en la variable global `token_hotel`
- Validación de tiempo de respuesta menor a 2000 ms
- Gestión automática de variables sin configuración manual

---

### 3️⃣ Katalon Recorder – Automatización Funcional

Scripts de automatización grabados con **Katalon Recorder**, almacenados en formato `.json`.

Ubicación:
/Pruebas Katalon

#### 🎯 Escenarios Automatizados

| Archivo | Descripción |
|------|------------|
| crear-habitacion.json | Flujo administrativo para creación de habitaciones |
| enviar-mensaje.json | Validación del formulario de contacto público |
| login.json | Autenticación de usuarios |
| probar-enlaces.json | Smoke test de navegación |
| reservar-habitacion.json | Flujo completo de reserva (Booking) |

---

## 🚀 Instrucciones de Ejecución

### Cypress

1. npm install
2. npx cypress open
3. Ejecutar los specs E2E en Chrome o Electron.

### Postman

1. Importar la colección desde /Pruebas Postman
2. Ejecutar con Collection Runner  
Nota: El token de sesión se gestiona automáticamente.

### Katalon Recorder

1. Instalar la extensión en Chrome o Firefox
2. Importar los archivos JSON desde /Pruebas Katalon
3. Ejecutar con Play Suite

---

## 🐛 Manejo de Errores Conocidos

### Bug 500 en Logout

El servidor retorna un error 500 al cerrar sesión bajo ciertas condiciones.

Solución:  
En el script `01_Auth_Testing.cy.js` se valida la redirección correcta al Home mediante `cy.url().should(...)`, permitiendo continuar la prueba a pesar del error del backend.

---

## ✒️ Autores

- John Steven Lopez Vélez
- Ariel Gonzalo Moreira Macías
