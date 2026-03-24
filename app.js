const packages = [
  {
    name: 'Explorer Day',
    duration: '1 día',
    price: 'USD 450–600',
    tagline: 'Ideal para primeras reservas y escapadas cortas',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    includes: ['Guía local 1:1 o 2:1', 'Transporte desde punto acordado', 'Equipo completo', 'Snacks y bebidas', 'Fotos digitales'],
    cta: 'Solicitar disponibilidad'
  },
  {
    name: 'Adventure Lodge',
    duration: '3-5 días',
    price: 'USD 2.800–4.500',
    tagline: 'Paquete estrella para posicionar valor y conversión',
    featured: true,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
    includes: ['Lodge all inclusive', '2–3 días guiados', 'Acceso a ríos privados', 'Comidas y traslados', 'Fotos y guía personalizada'],
    cta: 'Ver paquete estrella'
  },
  {
    name: 'Ultimate Patagonia Expedition',
    duration: '7 días',
    price: 'USD 6.000–10.000',
    tagline: 'Expedición exclusiva para pescadores avanzados',
    featured: false,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    includes: ['5–6 días en ríos remotos', 'Lodge o cabaña privada', 'Chef y comidas premium', 'Moscas personalizadas', 'Fotógrafo profesional'],
    cta: 'Diseñar itinerario'
  }
];

const listings = [
  {
    name: 'Río Baker Guided Day',
    type: 'Guía',
    region: 'Aysén',
    duration: '1 día',
    price: 'Desde USD 520',
    rating: '4.9',
    species: ['Trucha arcoíris', 'Streamer'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description: 'Salida guiada en una de las zonas más atractivas para truchas arcoíris y aguas de gran carácter.'
  },
  {
    name: 'Lodge Puelo Collection',
    type: 'Lodge',
    region: 'Los Lagos',
    duration: '3-5 días',
    price: 'Desde USD 3.100',
    rating: '4.8',
    species: ['Trucha café', 'Dry fly'],
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80',
    description: 'Base premium para combinar río, lago, buena gastronomía y salidas personalizadas.'
  },
  {
    name: 'Valdivia River Session',
    type: 'Guía',
    region: 'Los Ríos',
    duration: '1 día',
    price: 'Desde USD 430',
    rating: '4.7',
    species: ['Dry fly', 'Trucha arcoíris'],
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80',
    description: 'Jornada técnica para pescadores que quieren combinar precisión, paisaje y menor presión.'
  },
  {
    name: 'Southern Frontier Camp',
    type: 'Lodge',
    region: 'Magallanes',
    duration: '7 días',
    price: 'Desde USD 7.200',
    rating: '5.0',
    species: ['Trucha café', 'Expedición'],
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    description: 'Programa remoto de alta exclusividad para expediciones largas y aguas australes.'
  },
  {
    name: 'Petrohué Float Experience',
    type: 'Guía',
    region: 'Los Lagos',
    duration: '1 día',
    price: 'Desde USD 560',
    rating: '4.8',
    species: ['Trucha arcoíris', 'Nymph'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    description: 'Salida guiada con foco en paisajes icónicos y una experiencia muy potente para turismo internacional.'
  },
  {
    name: 'Aysén Signature Lodge',
    type: 'Lodge',
    region: 'Aysén',
    duration: '3-5 días',
    price: 'Desde USD 3.950',
    rating: '4.9',
    species: ['Trucha café', 'Trucha arcoíris'],
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80',
    description: 'Experiencia curada con lodge, guías locales, comidas y acceso a sectores de alto valor.'
  }
];

const destinationDetails = {
  modalAysen: {
    title: 'Aysén',
    description: 'Región clave para una propuesta premium: grandes ríos, menor saturación y gran atractivo para viajes de 3 a 7 días.',
    places: ['Río Baker', 'Puerto Bertrand', 'Sectores de expedición en Aysén interior']
  },
  modalLagos: {
    title: 'Los Lagos',
    description: 'Una zona muy útil para captar viajeros por conectividad, mezcla de lagos y ríos, y fuerza escénica del sur de Chile.',
    places: ['Río Petrohué', 'Río Puelo', 'Cuenca Llanquihue y entornos de lodge']
  },
  modalRios: {
    title: 'Los Ríos',
    description: 'Permite construir una oferta de jornadas técnicas y escapadas premium con menos presión y muy buen storytelling.',
    places: ['Valdivia y entorno fluvial', 'Sectores de río para dry fly', 'Accesos de media distancia']
  },
  modalMagallanes: {
    title: 'Magallanes',
    description: 'La zona más remota del portafolio, perfecta para expediciones, experiencias exclusivas y posicionamiento internacional.',
    places: ['Puerto Natales', 'Río Rubens', 'Programas de far south expedition']
  }
};

const packagesGrid = document.getElementById('packagesGrid');
const listingGrid = document.getElementById('listingGrid');
const searchForm = document.getElementById('searchForm');
const searchResultSummary = document.getElementById('searchResultSummary');
const typeFilter = document.getElementById('typeFilter');
const regionFilter = document.getElementById('regionFilter');
const durationFilter = document.getElementById('durationFilter');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const filterChips = document.querySelectorAll('.filter-chip');
const detailsButtons = document.querySelectorAll('.details-btn');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalPlaces = document.getElementById('modalPlaces');
const closeModal = document.getElementById('closeModal');
const leadForm = document.getElementById('leadForm');
const leadFormMessage = document.getElementById('leadFormMessage');

let activeChip = 'all';

function renderPackages() {
  packagesGrid.innerHTML = packages
    .map((item) => `
      <article class="package-card overflow-hidden rounded-[28px] border ${item.featured ? 'border-amber-300 bg-amber-50/60' : 'border-slate-200 bg-white'} shadow-soft">
        <div class="h-56 bg-cover bg-center" style="background-image:url('${item.image}')"></div>
        <div class="p-6">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-deep">${item.duration}</p>
              <h3 class="mt-2 text-2xl font-bold">${item.name}</h3>
            </div>
            ${item.featured ? '<span class="rounded-full bg-amber-200 px-3 py-1 text-xs font-bold text-amber-900">Most popular</span>' : ''}
          </div>
          <p class="mt-3 text-slate-600">${item.tagline}</p>
          <p class="mt-5 text-3xl font-extrabold text-slate-900">${item.price}</p>
          <ul class="mt-5 space-y-3 text-sm text-slate-600">
            ${item.includes.map((feature) => `<li class="flex gap-3"><span class="mt-1 h-2 w-2 rounded-full bg-accent"></span><span>${feature}</span></li>`).join('')}
          </ul>
          <button class="mt-6 w-full rounded-2xl ${item.featured ? 'bg-forest text-white' : 'bg-deep text-white'} px-5 py-3 font-semibold transition hover:opacity-90">${item.cta}</button>
        </div>
      </article>
    `)
    .join('');
}

function renderListings(data) {
  listingGrid.innerHTML = data
    .map((item) => `
      <article class="listing-card overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
        <div class="h-56 overflow-hidden">
          <img src="${item.image}" alt="${item.name}" class="h-full w-full object-cover" />
        </div>
        <div class="p-6">
          <div class="flex flex-wrap items-center gap-2">
            <span class="rounded-full badge-soft px-3 py-1 text-xs font-semibold">${item.type}</span>
            <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">${item.region}</span>
            <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">${item.duration}</span>
          </div>
          <div class="mt-4 flex items-start justify-between gap-4">
            <div>
              <h3 class="text-2xl font-bold">${item.name}</h3>
              <p class="mt-2 text-slate-600">${item.description}</p>
            </div>
            <div class="rounded-2xl bg-amber-50 px-3 py-2 text-center text-amber-900">
              <p class="text-xs font-semibold uppercase tracking-[0.12em]">Rating</p>
              <p class="text-lg font-bold">${item.rating}</p>
            </div>
          </div>
          <div class="mt-5 flex flex-wrap gap-2">
            ${item.species.map((specie) => `<span class="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700">${specie}</span>`).join('')}
          </div>
          <div class="mt-6 flex items-center justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Precio base</p>
              <p class="text-xl font-bold text-slate-900">${item.price}</p>
            </div>
            <button class="rounded-full bg-deep px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-deep/90">Ver detalle</button>
          </div>
        </div>
      </article>
    `)
    .join('');
}

function getFilteredListings() {
  return listings.filter((item) => {
    const matchRegion = regionFilter.value === 'all' || item.region === regionFilter.value;
    const matchType = typeFilter.value === 'all' || item.type === typeFilter.value;
    const matchDuration = durationFilter.value === 'all' || item.duration === durationFilter.value;

    const chipMatch = activeChip === 'all' || item.type === activeChip || item.region === activeChip;
    return matchRegion && matchType && matchDuration && chipMatch;
  });
}

function updateListings() {
  const filtered = getFilteredListings();
  renderListings(filtered);
  searchResultSummary.textContent = `${filtered.length} experiencia(s) sugerida(s) según tus filtros.`;
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateListings();
  document.getElementById('lodges').scrollIntoView({ behavior: 'smooth' });
});

filterChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    activeChip = chip.dataset.chip;
    filterChips.forEach((btn) => {
      btn.classList.remove('bg-deep', 'text-white', 'border-deep');
      btn.classList.add('border', 'border-slate-300', 'text-slate-700');
    });
    chip.classList.remove('border', 'border-slate-300', 'text-slate-700');
    chip.classList.add('bg-deep', 'text-white', 'border-deep');
    updateListings();
  });
});

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

detailsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.modal;
    const detail = destinationDetails[key];
    modalTitle.textContent = detail.title;
    modalDescription.textContent = detail.description;
    modalPlaces.innerHTML = detail.places.map((place) => `<div class="modal-place">${place}</div>`).join('');
    modalOverlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  });
});

function closeModalFn() {
  modalOverlay.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

closeModal.addEventListener('click', closeModalFn);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) closeModalFn();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModalFn();
});

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('leadName').value.trim();
  const email = document.getElementById('leadEmail').value.trim();
  const message = document.getElementById('leadMessage').value.trim();

  if (!name || !email || !message) {
    leadFormMessage.textContent = 'Completa nombre, correo y mensaje para simular el envío.';
    leadFormMessage.className = 'mt-4 text-sm text-red-600';
    return;
  }

  leadFormMessage.textContent = `Gracias, ${name}. Tu consulta fue registrada como ejemplo del MVP.`;
  leadFormMessage.className = 'mt-4 text-sm text-emerald-700';
  leadForm.reset();
});

renderPackages();
updateListings();
