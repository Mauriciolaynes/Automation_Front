# Reto de Automatización QA – FrontEnd (Sauce Demo)

Este proyecto consiste en una suite de pruebas automatizadas E2E para el sitio web [Sauce Demo](https://www.saucedemo.com/). El objetivo es validar el flujo crítico de compra y el inicio de sesión utilizando **Playwright** con **Cucumber** y **TypeScript**.

## 🚀 Stack Tecnológico

* **Lenguaje:** TypeScript
* **Framework de Pruebas:** Playwright
* **BDD:** Cucumber (Gherkin)
* **Patrón de Diseño:** Page Object Model (POM)
* **Entorno:** Node.js

---

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

1.  **Node.js** (Versión 16 o superior): [Descargar aquí](https://nodejs.org/)
2.  **Git**: Para clonar el repositorio.
3.  **Editor de Código**: Visual Studio Code (recomendado) o WebStorm.

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para configurar el proyecto localmente:

1.  **Clonar el repositorio** (o descargar el código):
    ```bash
    git clone https://github.com/Mauriciolaynes/Automation_Front
    ```

2.  **Navegar a la carpeta del proyecto:**
    ```bash
    cd automation-front-qa
    ```

3.  **Instalar las dependencias:**
    Ejecuta el siguiente comando para descargar las librerías necesarias:
    ```bash
    npm install
    ```

4.  **Instalar los navegadores de Playwright:**
    Esto descargará los binarios necesarios (Chromium, Firefox, WebKit):
    ```bash
    npx playwright install
    ```

---

## ▶️ Ejecución de las Pruebas

El proyecto cuenta con scripts pre-configurados para facilitar la ejecución.

```bash
Tag: @regression: Valida todo los casos de prueba
Tag: @login: Valida el login con diferentes usuarios
Tag: @compra: Valida la compra con un usuario
Tag: @carrito: Valida que el producto se agrego correctamente al carrito

```
### 1. Ejecución Completa (Regresión)
Para correr todos los escenarios de la suite:

```bash
npm test
