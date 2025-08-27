# Galería Studio Ghibli

Esta es una galería web simple que consume la **API pública de Studio Ghibli** para mostrar películas, personajes, lugares, especies y vehículos.  
El proyecto está pensado como un **mini-proyecto frontend**, usando HTML, CSS y JS puro.

---

## 📂 Estructura del proyecto

gallery/
    index.html
    README.md
    css/
        style.css
    js/
        script.js


> Nota: En versiones anteriores se planteó un JSON local y un script de scraping para poblar la galería, pero se decidió consumir directamente la API pública para simplificar el proyecto.

---

## ⚡ Funcionalidades

- Galería responsive con **CSS Grid**.  
- Hover elegante con overlay mostrando información del ítem.  
- Filtros por tipo (Películas, Personajes, Lugares, Especies, Vehículos).  
- Mobile first: se adapta a dispositivos móviles, tablets y desktop.

---

## 💻 Tecnologías utilizadas

- HTML5  
- CSS3 (Grid, hover effects)  
- JavaScript (Fetch API, manipulación del DOM)

---

## 🚀 Uso

1. Clonar el repositorio:

    git clone <tu-repo-url>

2. Abrir index.html en el navegador.

## 🔮 Mejoras futuras

Crear un script de scraping para poblar un JSON local y evitar dependencias de la API.

Agregar detalles extra en cada tarjeta (sinopsis, año, director, etc.).

Añadir lazy loading para imágenes grandes.

Posible integración con frameworks como React para un manejo más dinámico.