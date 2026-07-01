# Tripleten web_project_around_es

## Descripción

El proyecto define una estructura de datos estática (`initialCards`) que contiene información sobre diferentes destinos naturales (nombre y enlace de imagen) e implementa de forma robusta la lógica interactiva para la manipulación del Document Object Model (DOM). Permite editar el perfil del usuario, renderizar tarjetas dinámicamente, añadir nuevos destinos mediante un formulario, dar "Me gusta" a las fotos, eliminarlas y abrirlas en un visor a pantalla completa.

## Estructura del Código

El script principal consta de partes clave:

1. **Arreglo de Datos**: Un array de objetos (`const initialCards`) con propiedades `name` y `link` para renderizar las tarjetas iniciales.
2. **Método de Recorrido**: El uso de `.forEach()` para iterar e insertar cada tarjeta en el contenedor al cargar la página.
3. **Funciones de Responsabilidad Única**:
   - `openModal()` y `closeModal()` para el control genérico de ventanas emergentes.
   - `fillProfileForm()` y `handleOpenEditModal()` para la gestión del perfil.
   - `handleProfileFormSubmit()` para actualizar los datos del usuario.
   - `getCardElement()` para clonar el `<template>` y armar cada tarjeta de forma independiente.
   - `renderCard()` y `handleCardFormSubmit()` para crear e insertar nuevas tarjetas al principio de la lista.
   - `handleLikeIcon()`, `handleDeleteCard()` y `handleCardImageClick()` para manejar las interacciones de cada tarjeta.
4. **Escuchadores de Eventos**: Vinculación de los eventos `click` y `submit` a sus respectivos botones, imágenes y formularios al final del script.
