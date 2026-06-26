# Tripleten web_project_around_es

## Descripción

El proyecto define una estructura de datos estática (`initialCards`) que contiene información sobre diferentes destinos naturales (nombre y enlace de imagen), incluye un script que recorre esta colección para procesar y listar los nombres en la consola y adicionalmente, implementa de forma robusta la lógica para la manipulación del Document Object Model (DOM).

## Estructura del Código

El script principal consta de dos partes clave:

1. **Arreglo de Datos**: Un array de objetos (`const initialCards`) con propiedades `name` y `link`.
2. **Método de Recorrido**: El uso de `.forEach()` para iterar de manera eficiente sobre cada elemento.
3. **Funciones de Responsabilidad Única**:
   - `openModal()` y `closeModal()`
   - `fillProfileForm()`
   - `handleOpenEditModal()`
   - `handleProfileFormSubmit()`
4. **Escuchadores de Eventos**: Vinculación de los eventos `click` y `submit` a sus respectivos botones y formularios al final del script.
