// Minimal JavaScript to populate characters + gallery
const CHARACTERS = [
  { name: 'Cadence', desc: 'Librarian and guardian of stories', img: 'assets/images/cadence-placeholder.jpg' },
  { name: 'Bibli', desc: 'Magical bookworm', img: 'assets/images/bibli-placeholder.jpg' }
];

const GALLERY = [
  'assets/images/placeholder-1.jpg',
  'assets/images/placeholder-2.jpg',
  'assets/images/placeholder-3.jpg'
];

function buildCharacters() {
  const list = document.getElementById('character-list');
  CHARACTERS.forEach(c => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card h-100">
        <img src="${c.img}" class="card-img-top" alt="${c.name}">
        <div class="card-body">
          <h5 class="card-title">${c.name}</h5>
          <p class="card-text">${c.desc}</p>
        </div>
      </div>`;
    list.appendChild(col);
  });
}

function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  GALLERY.forEach(src => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3';
    col.innerHTML = `
      <div class="card">
        <img src="${src}" class="card-img-top" alt="gallery">
      </div>`;
    grid.appendChild(col);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  buildCharacters();
  buildGallery();
});