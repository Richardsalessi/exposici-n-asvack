## Autores

**Richards Alessi González Pajón** y **Valentina Zuluaga Gonzalez**

---

# Documentación del Proyecto Web: Asvack

## Nombre del Proyecto

**Asvack - Soluciones Tecnológicas en Línea**

## Descripción General

Asvack es un sitio web tipo e-commerce construido **desde cero**, sin uso de plantillas externas ni frameworks. El objetivo fue aplicar los conocimientos adquiridos en clase utilizando solo **HTML, CSS y JavaScript puro**, para estructurar, diseñar y funcionalizar una landing page moderna con categorías, formulario de contacto y un panel de control visual.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Función Principal                                                |
| ---------- | ---------------------------------------------------------------- |
| HTML5      | Estructura de todas las páginas                                  |
| CSS3       | Estilización general, diseño responsivo y tarjetas animadas      |
| JavaScript | Interacciones como filtrado dinámico, scroll, validaciones       |
| AOS.js     | Animaciones al hacer scroll en la landing                        |
| FormSubmit | Envío de formularios sin backend ni PHP                          |
| ApexCharts | Visualización de gráficas interactivas en el Dashboard del panel |
| VSCode     | Editor de código utilizado                                       |
| PNG/WEBP   | Formatos usados para íconos, banners y logos personalizados      |

---

## 📁 Estructura del Proyecto

```
Proyecto Desarrollo Web/
├── index.html
├── gracias.html
├── main.js
├── style.css
├── panel/
│   ├── login.html
│   └── dashboard.html
├── categorias/
│   ├── boards.html
│   ├── case.html
│   ├── monitores.html
│   ├── mouse.html
│   ├── teclados.html
│   ├── procesadores.html
│   └── tarjetasgraficas.html
└── img/
    └── (Todas las imágenes de productos, logos y banners)
```

---

## 💻 Landing Page (`index.html`)

### Secciones principales:

1. **Header fijo** con navegación clara
2. **Hero** de bienvenida con botón CTA
3. **Marcas destacadas** (logos de Nvidia, Asus, Razer, etc.)
4. **Catálogo con filtro por categorías** (con JavaScript puro)
5. **Sección de características** con imagen ilustrativa
6. **Formulario de contacto** funcional con redirección a `gracias.html`
7. **Footer** con enlaces, misión, visión y redes sociales
8. **Botón flotante** para volver al inicio

---

## 🗃️ Páginas por Categoría

Cada categoría cuenta con su propia página HTML, conteniendo:

* ✅ 3 productos con nombre, imagen y descripción
* ✅ Tarjetas estilizadas con hover
* ✅ Botón de "Volver al Inicio"
* ✅ Encabezado con logo, menú y diseño unificado

### Categorías:

* Boards
* Case
* Diademas
* Monitores
* Mouse
* Procesadores
* Tarjetas Gráficas
* Teclados

---

## 💬 Formulario de Contacto

* Usa [FormSubmit](https://formsubmit.co/) para enviar datos sin PHP
* El formulario redirige a `gracias.html` tras el envío exitoso
* Validación básica con HTML5
* CAPTCHA desactivado con `input hidden`

---

## 🖥️ Panel de Control (Autenticación y Dashboard)

### `panel/login.html`

* Diseño centrado y limpio
* Input de usuario y contraseña
* Validación con JavaScript
* Si las credenciales son incorrectas: muestra mensaje de error
* Si son correctas: redirige a `dashboard.html`

### `panel/dashboard.html`

* Visualización de métricas mediante gráficas ApexCharts
* Representa ventas, tráfico, usuarios, etc. con animaciones
* Botón de regreso al inicio
* Diseño limpio, sin recargar colores ni plantillas

---

## 🖌️ Estilos Globales (`style.css`)

* Paleta: blanco, gris, violeta y negro
* Tipografía: **Segoe UI**
* Tarjetas con **box-shadow** y animaciones **hover**
* Botones `cta-a` con animaciones y escala
* Diseño **responsive** con Flexbox y media queries
* Botón flotante animado para scroll

---

## 📑 Funcionalidades JavaScript (`main.js`)

* Filtro de productos por categoría
* Scroll suave para botón flotante
* Inicialización de animaciones AOS
* Validación del login
* Redirección tras formulario

---

## 📋 Conclusión

El proyecto Asvack fue construido completamente **desde cero**, sin frameworks, plantillas ni ayuda externa, integrando funcionalidades reales, diseño visual profesional y una estructura clara. Se logró un sitio fluido, moderno y funcional que representa un verdadero e-commerce educativo.

> "Aprendimos a estructurar, diseñar y dar vida a una web completa sin depender de frameworks, resolviendo todo con lo aprendido en clase."
