# Proyecto-Final-de-Calidad-del-Software
# Software Testing Suite: Cypress, Katalon & Postman

Este repositorio contiene una suite de pruebas automatizadas para asegurar la calidad y el correcto funcionamiento de aplicaciones web y APIs. Se han implementado pruebas de UI, pruebas dirigidas por datos (DDT) y validaciones de API.

## 🛠️ Tecnologías Utilizadas

* **Cypress:** Pruebas de extremo a extremo (E2E) para la interfaz de usuario.
* **Katalon Recorder:** Pruebas funcionales de UI con enfoque en Data-Driven Testing.
* **Postman:** Pruebas avanzadas de validación de endpoints y respuestas de API.

---

## 🧪 Contenido de las Pruebas

### 1. Cypress (E2E Testing)
Se implementaron flujos automatizados sobre la plataforma **Restful Booker**, enfocándose en:
* **Gestión de Sesiones:** Pruebas de login y logout.
* **Manejo de Condiciones de Carrera:** Optimización de tiempos de espera y aserciones para evitar fallos intermitentes.
* **Debugging:** Resolución de errores de renderizado (React) y validación de estados del DOM.

**Ejecución:**
```bash
# Instalar dependencias
npm install cypress --save-dev

# Abrir el panel de Cypress
npx cypress open
