# Tripleten web_project_around_es

## 🌐 Demo en Vivo

Puedes ver y probar el portafolio en funcionamiento entrando al siguiente enlace: 👉 [Ver Portafolio en Vivo](https://avilasanti.github.io/web_project_around_es/)

## Descripción

Este proyecto es una galería interactiva de destinos naturales que manipula el DOM de forma dinámica. Permite editar el perfil de usuario, añadir y eliminar tarjetas, dar "Me gusta" a las fotos y abrirlas en un visor a pantalla completa.

La arquitectura del proyecto ha sido completamente refactorizada bajo los principios de la **Programación Orientada a Objetos (POO)** y **TypeScript**, garantizando un código limpio, modular, escalable y con un tipado estricto.

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **TypeScript**

## Estructura del Código y Componentes

El proyecto separa de forma estricta sus responsabilidades en clases independientes dentro del directorio `src/components/`:

- **`Card`**: Genera la estructura y el marcado de las tarjetas, administrando de forma interna los escuchadores de eventos para los Likes, la eliminación y el clic en la imagen (acoplamiento débil).
- **`FormValidator`**: Motor encargado de validar campos en tiempo real de manera aislada y gestionar de forma dinámica el estado de los botones de envío.
- **`Section`**: Clase genérica encargada únicamente de iterar y renderizar elementos en el DOM mediante funciones callback.
- **`Popup`**: Clase base que controla la lógica global de apertura, cierre y listeners de las ventanas emergentes (incluyendo el cierre por tecla `Escape` y por clic en el fondo oscuro).
- **`PopupWithImage`** y **`PopupWithForm`**: Subclases especializadas que heredan de `Popup` para inyectar datos de imágenes a pantalla completa o extraer y procesar la información de los formularios.
- **`UserInfo`**: Encapsula y gestiona la lectura y escritura de la información del perfil del usuario directamente en la interfaz.

### Orquestador (`index.ts`)

Fiel al diseño modular, el archivo principal del proyecto contiene única y exclusivamente la inicialización y creación de las instancias de estas clases, además de configurar los detectores de eventos específicos de la página.
