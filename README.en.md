# 🌐 Vue 3 Portfolio - Odette Gallo

📄 This README is in English. For the Spanish version, click [here](README.md).

This repository contains the source code for the professional portfolio built using Vue 3, Pinia, Vuetify, and Vue Router.  
You can view the live version here:  
🔗 [https://odettegallo.github.io/](https://odettegallo.github.io/)

---

## 🛠️ Technical Explanation and Development Process

### 1. Tool Selection Justification (The Stack)

The choice of this tech stack focused on efficiency, maintainability, and the adoption of modern Front-End development standards.

- **Vue.js 3 (Composition API)**  
  - *Reason:* Chosen for its gentle learning curve, excellent performance, and reactive UI capabilities.  
  - *Technical Advantage:* The Composition API allows for more readable and modular component logic, especially in large components, improving code reuse.

- **Pinia (State Management)**  
  - *Reason:* Selected as the centralized state manager.  
  - *Technical Advantage:* Recommended for Vue 3, Pinia offers a lightweight and typed syntax (especially with TypeScript), making global state handling (like portfolio data in `usePortfolioStore.js`) predictable and easy to debug.

- **Vuetify (UI Components)**  
  - *Reason:* Used to quickly achieve a professional, clean, and consistent design.  
  - *Technical Advantage:* As a Material Design-based framework, Vuetify ensures visual coherence and automatic responsiveness across components. Theme customization in `main.js` (`primary: '#1B3A5A'`, `secondary: '#0e5385ff'`) provides a modern and professional visual identity.

- **Vue Router**  
  - *Reason:* Manages application routing, enabling smooth single-page navigation between views (`/`, `/projects`, `/contact`).  
  - *Technical Advantage:* Clear route handling and transitions.

---

### 2. Development Process and Structure

The project was built following modular design principles and the Single Responsibility Principle.

#### A. Structure and Organization

- **Views (`views/`)**  
  Contain the full layout of each page (e.g., `ProjectsView.vue`), orchestrating components and data logic.

- **Reusable Components (`components/`)**  
  Small, focused UI building blocks.

- **Key Example of Modularity:**  
  The `ProjectCard.vue` component encapsulates the project card, eliminating duplication in `ProjectsView.vue` and `ProjectView.vue`, ensuring consistent styling across the app.

- **Route Transitions:**  
  A CSS transition (`<transition name="fade">`) was implemented in `App.vue` to enhance user experience when navigating between views.

#### B. Data Flow (Pinia)

All static portfolio information (projects, skills, contact) is centralized in the `usePortfolioStore.js` store.

- *Advantage:*  
  This decouples data from the interface. If project information changes, it only needs to be updated in one place (`usePortfolioStore.js`), and all views (`ProjectsView.vue`, `ProjectView.vue`) update reactively, improving maintainability.

---

### 3. Conclusion (Project Value)

> In summary, this portfolio showcases the ability to:
> - Master Vue 3 and its ecosystem (Pinia, Vuetify, Router) to build robust applications.
> - Apply best development practices (modularity, reusable components) for clean and maintainable code.
> - Create a professional and accessible user interface through a consistent design theme.

---

## 🚀 View the Live Portfolio

🔗 [https://odettegallo.github.io/](https://odettegallo.github.io/)
