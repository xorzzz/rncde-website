# Runcode Ingeniería

Sitio web corporativo para presentar a **Runcode Ingeniería**, sus servicios de desarrollo de software y su forma de trabajo. El proyecto reúne una página de inicio, secciones informativas y una interfaz de contacto en una experiencia adaptable a distintos tamaños de pantalla.

**Sitio publicado:** [www.runcode.co](https://www.runcode.co)

**Maquetas previas:** [Ver diseños en Figma](https://www.figma.com/design/05aEwoLv3G2gRyxQO0nSNI/WEB-PAGES?node-id=225-255)

El archivo de Figma reúne las maquetas previas de las páginas Inicio, Nosotros, Cómo lo hacemos, Por qué Runcode, Servicios y Contacto, con vistas de escritorio y móvil. Sirve como referencia para revisar la estructura visual del sitio.

## Qué incluye

- Página de inicio con presentación de la empresa, servicios y llamadas a la acción.
- Secciones dedicadas a la empresa, los servicios, el proceso de trabajo y las razones para elegir Runcode.
- Página de contacto con formulario visual e información de la empresa.
- Páginas de términos, privacidad y una vista para rutas no encontradas.
- Navegación entre páginas con transiciones, componentes reutilizables y estilos adaptables a móvil.
- Efectos visuales con partículas mediante tsParticles.

## Tecnologías

| Herramienta | Uso en el proyecto |
| --- | --- |
| Vue 3 | Interfaz y componentes |
| Vue Router 4 | Navegación entre páginas |
| Vite 5 | Servidor de desarrollo y compilación |
| Sass / SCSS | Estilos de secciones y componentes |
| Pinia | Configuración de estado global |
| tsParticles | Efectos de partículas |

## Ejecutarlo localmente

Necesitas **Node.js y npm**. Desde la raíz del repositorio:

```bash
npm ci
npm run dev
```

Abre en el navegador la dirección local que indique Vite. Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

El proyecto también incluye `npm run lint` y `npm run format`. Ten en cuenta que el comando de lint aplica correcciones automáticamente.

## Estructura principal

```text
src/
├── assets/       # Imágenes y estilos
├── components/   # Navegación, botones, tarjetas y elementos reutilizables
├── router/       # Definición de rutas
├── stores/       # Estado con Pinia
└── views/        # Páginas del sitio
```

## Estado del proyecto

Esta es una implementación de la interfaz. El formulario de contacto cuenta con campos y validación HTML, pero todavía no envía mensajes a un servicio. Algunas secciones conservan texto provisional y un enlace de servicios apunta a una ruta de contacto que no está definida (`/contact-us` en lugar de `/contact`). Estos puntos quedan pendientes antes de usar el sitio como canal comercial.
