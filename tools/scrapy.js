const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const URL = 'https://disney.fandom.com/wiki/Category:Kingdom_Hearts_characters';

(async () => {
  try {
    console.log(`Fetching HTML from ${URL}...`);
    const response = await fetch(URL);
    const html = await response.text();

    const $ = cheerio.load(html);
    // Selector para los miembros de la categoría: enlaces con clase .category-page__member-link
    const items = $('.category-page__member-link');
    const characters = [];

    items.each((i, el) => {
      const name = $(el).text().trim();
      let link = $(el).attr('href');
      if (link && !link.startsWith('http')) {
        link = `https://disney.fandom.com${link}`;
      }
      characters.push({ name, link });
    });

    console.log(`Found ${characters.length} characters.`);

    const outPath = path.join(__dirname, '..', 'data', 'gallery.json');
    fs.writeFileSync(outPath, JSON.stringify(characters, null, 2), 'utf8');
    console.log(`Data saved to ${outPath}.`);
  } catch (err) {
    console.error('Error during scraping:', err);
  }
})();
