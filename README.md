# 🌐 Portafolio Vue 3 - Odette Gallo

📄 This README is in Spanish. For the English version, click [here](README.en.md).

Este repositorio contiene el código fuente del portafolio profesional desarrollado con Vue 3, Pinia, Vuetify y Vue Router. Puedes ver la versión publicada aquí:  
🔗 [https://odettegallo.github.io/](https://odettegallo.github.io/)

---

## 🛠️ Explicación Técnica y de Proceso del Portafolio

### 1. Justificación de la Elección de Herramientas (El Stack)

La elección del stack tecnológico se centró en la eficiencia, la mantenibilidad y la adopción de estándares modernos del desarrollo Front-End.

- **Vue.js 3 (Composition API)**  
  - *Motivo:* Curva de aprendizaje suave, excelente rendimiento y capacidad reactiva.  
  - *Ventaja Técnica:* El Composition API permite organizar la lógica de los componentes de forma más legible y modular, mejorando la reutilización del código.

- **Pinia (Gestión de Estado)**  
  - *Motivo:* Gestor de estado recomendado para Vue 3.  
  - *Ventaja Técnica:* Sintaxis ligera y tipada, manejo predictible del estado global (ej. `usePortfolioStore.js`), fácil de depurar.

- **Vuetify (Componentes UI)**  
  - *Motivo:* Framework basado en Material Design para lograr un diseño profesional y consistente.  
  - *Ventaja Técnica:* Responsividad automática, coherencia visual, y personalización del tema (`primary: '#1B3A5A'`, `secondary: '#0e5385ff'`) para una identidad moderna.

- **Vue Router**  
  - *Motivo:* Navegación fluida tipo SPA entre vistas (`/`, `/projects`, `/contact`).  
  - *Ventaja Técnica:* Manejo claro de rutas y transiciones.

---

### 2. Proceso de Desarrollo y Estructura

El proyecto se construyó siguiendo principios de diseño modular y separación de responsabilidades (Single Responsibility Principle).

#### A. Estructura y Organización

- **Vistas (`views/`)**  
  Contienen el diseño completo de cada página (ej. `ProjectsView.vue`), orquestando componentes y lógica de datos.

- **Componentes Reutilizables (`components/`)**  
  Piezas de UI pequeñas y enfocadas.

- **Ejemplo Clave de Modularidad:**  
  El componente `ProjectCard.vue` encapsula la tarjeta de proyecto, eliminando duplicación en `ProjectsView.vue` y `ProjectView.vue`, asegurando consistencia visual.

- **Transiciones de Ruta:**  
  Se implementó una transición CSS (`<transition name="fade">`) en `App.vue` para mejorar la experiencia de usuario al navegar entre vistas.

#### B. Flujo de Datos (Pinia)

Toda la información estática del portafolio (proyectos, habilidades, contacto) se centraliza en el store `usePortfolioStore.js`.

- *Ventaja:*  
  Desacopla los datos de la interfaz. Si la información cambia, se actualiza en un solo lugar y todas las vistas se sincronizan automáticamente.

---

### 3. Conclusión (El Valor del Proyecto)

> En resumen, este portafolio es una demostración de la capacidad de:
> - Dominar Vue 3 y su ecosistema (Pinia, Vuetify, Router) para construir aplicaciones robustas.
> - Implementar buenas prácticas de desarrollo (modularidad, componentes reutilizables) para un código limpio y mantenible.
> - Crear una interfaz de usuario profesional y accesible mediante un tema de diseño consistente.

---

## 🚀 Ver el Portafolio en Línea

🔗 [https://odettegallo.github.io/](https://odettegallo.github.io/)
