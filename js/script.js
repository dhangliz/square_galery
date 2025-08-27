let filmsData = []; // here save the films

async function chargeFilms() {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  filmsData = await res.json();

  renderFilms(filmsData);
}

function renderFilms(films) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  films.forEach(film => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${film.image}" alt="${film.title}" />
      <h3>${film.title}</h3>
      <p>${film.original_title}</p>
    `;

    gallery.appendChild(card);
  });
}



chargeFilms();
