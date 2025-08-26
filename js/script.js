const gallery = document.getElementById('gallery');

const items = [
  {
    nombre: "Agrias",
    universo: "ffta",
    tipo: "pj",
    categoria: "jobs",
    descripcion: "Heroína valiente, Knight",
    img: "https://example.com/ffta/agrias.jpg",
    link: "https://finalfantasy.fandom.com/wiki/Agrias"
  },
  {
    nombre: "Cloud",
    universo: "kh",
    tipo: "pj",
    categoria: "pj",
    descripcion: "Protagonista KH/FFVII",
    img: "https://example.com/kh/cloud.jpg",
    link: "https://kingdomhearts.fandom.com/wiki/Cloud_Strife"
  },
  {
    nombre: "Black Mage",
    universo: "ffta2",
    tipo: "pj",
    categoria: "jobs",
    descripcion: "Mago oscuro clásico",
    img: "https://example.com/ffta2/blackmage.jpg",
    link: "https://finalfantasy.fandom.com/wiki/Black_Mage"
  },
  {
    nombre: "Heartless Soldier",
    universo: "kh",
    tipo: "enemigos",
    categoria: "enemigos",
    descripcion: "Enemigo Sincorazón",
    img: "https://example.com/kh/heartless.jpg",
    link: "https://kingdomhearts.fandom.com/wiki/Heartless"
  }
];

// Función para generar items
function displayItems(filter = 'all') {
  gallery.innerHTML = '';
  let filtered = items.filter(item => {
    if (filter === 'all') return true;
    return item.universo === filter || item.tipo === filter || item.categoria === filter;
  });

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');
    div.innerHTML = `
      <a href="${item.link}" target="_blank">
        <img src="${item.img}" alt="${item.nombre}">
        <div class="item-info">
          <strong>${item.nombre}</strong><br>
          ${item.descripcion}
        </div>
      </a>
    `;
    fetch('https://finalfantasy.fandom.com/wiki/Final_Fantasy_Tactics_Advance_characters')
  .then(res => res.text())
  .then(htmlString => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    const personajes = doc.querySelectorAll('.category-page__member-link'); 
    personajes.forEach(p => console.log(p.textContent, p.href));
  });

    gallery.appendChild(div);
    
  });
}

// Mostrar todos al inicio
displayItems();

// Filtros
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    displayItems(btn.getAttribute('data-filter'));
  });
});
