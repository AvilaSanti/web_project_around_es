# Tripleten web_project_around_es

## 🌐 Demo en Vivo

Puedes ver y probar el portafolio en funcionamiento entrando al siguiente enlace: 👉 [Ver Portafolio en Vivo](https://avilasanti.github.io/web_project_around_es/)

## Descripción

Este proyecto es una galería interactiva de destinos naturales que manipula el DOM de forma dinámica. Permite editar el perfil de usuario, añadir y eliminar tarjetas, dar "Me gusta" a las fotos y abrirlas en un visor a pantalla completa.

Su arquitectura sigue principios de **diseño modular y código limpio**, separando las responsabilidades en dos archivos independientes:

- **`index.js`**: Controla la interfaz de usuario, eventos y el flujo de las tarjetas.
- **`validate.js`**: Un motor de validación de formularios 100% reutilizable y dinámico (basado en un objeto `config`).

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

## Estructura del Código

### 1. Script Principal (`index.js`)

- **Arreglo de Datos**: Un array de objetos (`const initialCards`) con propiedades `name` y `link` para renderizar las tarjetas iniciales.
- **Método de Recorrido**: El uso de `.forEach()` para iterar e insertar cada tarjeta en el contenedor al cargar la página.
- **Funciones de Responsabilidad Única**:
  - `openModal()` y `closeModal()` para el control genérico de ventanas emergentes.
  - `fillProfileForm()` y `handleOpenEditModal()` para la gestión del perfil.
  - `handleProfileFormSubmit()` para actualizar los datos del usuario.
  - `getCardElement()` para clonar el `<template>` y armar cada tarjeta de forma independiente.
  - `renderCard()` y `handleCardFormSubmit()` para crear e insertar nuevas tarjetas al principio de la lista.
  - `handleLikeIcon()`, `handleDeleteCard()` y `handleCardImageClick()` para manejar las interacciones de cada tarjeta.
- **Escuchadores de Eventos**: Vinculación de los eventos `click` y `submit` a sus respectivos botones, imágenes y formularios al final del script.

### 2. Motor de Validación Reutilizable (`validate.js`)

Para evitar duplicar código y mantener el proyecto altamente mantenible, se desarrolló un módulo de validación independiente y **100% reutilizable**. Para no depender de variables globales o escribir clases CSS fijas (`"popup__input_type_error"`), las funciones clave (`showInputError`, `hideInputError`, `checkInputValidity`, `setEventListeners` y `toggleButtonState`) se diseñaron para recibir parámetros dinámicos:

- **`formElement`**: Permite que las funciones operen sobre cualquier formulario de la página de forma aislada (tanto el de "Editar Perfil" como el de "Nuevo Lugar").
- **Objeto `config`**: Un objeto de configuración que centraliza todos los selectores y clases CSS de error del proyecto en un solo lugar.

Gracias a este enfoque modular, el archivo principal solo necesita importar y activar la validación mediante una única llave de encendido:

```javascript
enableValidation(config);
```
