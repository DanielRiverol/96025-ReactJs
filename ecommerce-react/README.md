
# Ecommerce React + Firebase

¡Bienvenido al repositorio de **ecommerce-react**! Esta es una aplicación de comercio electrónico moderna, rápida y fluida construida con **React 19**, **Vite** y **Firebase Firestore** para la persistencia de datos en tiempo real. La interfaz visual está optimizada con **Tailwind CSS v4** y componentes de **DaisyUI v5**.

El proyecto cuenta con una arquitectura desacoplada basada en Hooks personalizados para el consumo de datos de Firebase, un manejo global de estado para el carrito de compras mediante Context API, y un enrutamiento dinámico y seguro.

---

## 🚀 Características Principales

* **Catálogo Dinámico:** Navegación por categorías y visualización completa de productos obtenidos directamente desde Cloud Firestore.
* **Carrito de Compras Centralizado:** Estado global administrado mediante un proveedor de contexto (`CartContext`) que permite añadir, actualizar cantidades, eliminar productos y vaciar el carrito de forma reactiva.
* **Detalle de Producto Adaptativo:** Vista individualizada para cada ítem con control de stock nativo, contador interactivo (`ItemCount`) y confirmación mediante modales accesibles.
* **Proceso de Checkout Automatizado:** Formulario integrado que recopila datos del comprador y registra órdenes de compra únicas con marcas de tiempo de servidor (`serverTimestamp`) en Firestore.
* **Diseño Responsivo e Inclusivo:** Interfaz limpia estructurada mediante layouts asimétricos modernos, CSS Grid y Flexbox provistos por Tailwind v4, con soporte nativo para temas oscuros y claros a través de DaisyUI.
* **Script de Inicialización de Datos (Seeding):** Incluye un módulo aislado para migrar y estructurar colecciones relacionales de categorías y productos de forma masiva en Firebase usando lotes de escritura (`writeBatch`).

---

## 🛠️ Tecnologías y Herramientas Utilizadas

* **Core:** [React 19](https://react.dev/) & [Vite 8](https://vite.dev/)
* **Enrutamiento:** [React Router Dom 7](https://reactrouter.com/)
* **Estilos y Componentes:** [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI v5](https://daisyui.com/)
* **Base de Datos / Backend-as-a-Service:** [Firebase 12 (Firestore)](https://firebase.google.com/)
* **Iconos:** [@boxicons/react](https://boxicons.com/)
* **Pruebas:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)

---

## 📂 Estructura del Proyecto

```text
├── public/
│   └── products.json          # Archivo de respaldo con datos de muestra
├── src/
│   ├── assets/                # Recursos estáticos (logos, imágenes)
│   ├── components/            # Componentes de UI modulares y reutilizables
│   │   ├── Button/
│   │   ├── Cart/              # Vista detallada del carrito de compras
│   │   ├── Footer/
│   │   ├── Input/             # Componentes de búsqueda y filtrado reactivo
│   │   ├── ItemDetailContainer/ # Contenedor, detalle y contador de producto
│   │   ├── ItemListContainer/ # Grid de catálogo y tarjetas de presentación
│   │   ├── Navbar/            # Barra de navegación superior con Widget del carrito
│   │   ├── NotFound/          # Manejador visual de rutas 404
│   │   └── Sidebar/           # Panel lateral de navegación por categorías
│   ├── context/
│   │   └── CartContext.jsx    # Contexto global para la gestión del carrito
│   ├── hooks/
│   │   ├── useFetch.jsx       # Hook utilitario para peticiones HTTP abstractas
│   │   └── useFirebase.jsx    # Hooks personalizados para interactuar con Firestore
│   ├── services/
│   │   └── firebaseConfig.js  # Inicialización del SDK de Firebase y Firestore
│   ├── index.css              # Configuración de directivas de Tailwind v4 y DaisyUI
│   ├── main.jsx               # Punto de entrada de la aplicación
│   ├── seeddb.js              # Script de migración masiva de datos a Cloud Firestore
│   └── setupTests.js          # Configuración inicial del entorno de testing
├── .env.example               # Plantilla para variables de entorno requeridas
├── index.html                 # Plantilla HTML5 base
├── package.json               # Configuración de dependencias y scripts de ejecución
└── vite.config.js             # Configuración de bundler Vite y suite de testing

```

---

## 🔧 Instalación y Configuración Local

Siga los siguientes pasos para clonar, configurar e iniciar el proyecto en su entorno de desarrollo:

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone https://github.com/tu-usuario/ecommerce-react.git
cd ecommerce-react
npm install

```

### 2. Configurar las Variables de Entorno

Cree un archivo `.env` en la raíz del proyecto basándose en `.env.example`. Complete cada campo con las credenciales provistas por su consola de Firebase:

```env
VITE_APIKEY=tu_api_key_aqui
VITE_AUTHDOMAIN=tu_auth_domain_aqui
VITE_PROJECTID=tu_project_id_aqui
VITE_STORAGEBUCKET=tu_storage_bucket_aqui
VITE_MESSAGINGSENDERID=tu_messaging_sender_id_aqui
VITE_APPID=tu_app_id_aqui

```

### 3. Poblar la Base de Datos (Seeding)

El proyecto incluye un script automatizado para crear e interconectar las colecciones de `categories` y `products` en su base de datos Firestore de manera limpia.

Asegúrese de configurar temporalmente sus variables de entorno o tener acceso de escritura en las reglas de Firestore, y luego ejecute en su terminal:

```bash
npm run seed

```

*Este comando leerá los datos estructurados, resolverá dinámicamente las referencias cruzadas de IDs de categorías, y confirmará los cambios en lote.*

### 4. Iniciar el servidor de desarrollo

Una vez poblada la base de datos, ejecute el comando para levantar el servidor local de Vite:

```bash
npm run dev

```

La aplicación estará disponible de forma predeterminada en `http://localhost:5173/`.

---

## 🛠️ Arquitectura Técnica Destacada

### Flujo de Datos Basado en Hooks Personalizados

La aplicación no expone la lógica de Firebase directamente en las vistas. En su lugar, el archivo `src/hooks/useFirebase.jsx` provee abstracciones reactivas potentes:

* `useProducts(categoryId)`: Se suscribe y filtra dinámicamente colecciones completas utilizando cláusulas `where` condicionales.
* `useCategories()`: Recupera la lista de categorías dinámicas que estructuran el panel lateral.
* `useProductById(id)`: Gestiona estados asincrónicos de carga (`loading`) y aislamiento de errores al consultar documentos individuales de productos.

### Gestión de Estado Global (`CartContext`)

El estado de la compra se aloja en un contexto envolvente. Cualquier componente secundario puede suscribirse a las acciones del carrito consumiendo el hook unificado `useCart()`, exponiendo una interfaz predecible:

```javascript
const { cart, addToCart, totalQuantity, removeFromCart, clearCart } = useCart();

```

---

## 🧪 Pruebas Unitarias

Para ejecutar el set de pruebas unitarias y de integración configuradas con Vitest y React Testing Library, ejecute:

```bash
npm run test

```

---

## ✒️ Licencia

Este proyecto se encuentra bajo la licencia MIT. Puede utilizarlo, modificarlo y distribuirlo libremente para fines educativos o profesionales.