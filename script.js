document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
});

const projects = [
  {
    title: "3D Visualization of Old Montreal Landmarks",
    intro: "An interactive 3D web map of Old Montreal's landmark buildings. I implemented dual basemap blending (satellite and custom vector styles), 2D/3D pitch toggling, and interactive popups using GeoJSON polygon data. I customized the interface design to support historical storytelling.",
    keywords: ["historic mapping","heritage Old Montreal","3D Map","Mapbox GL JS"],
    url: "https://sleepysunflower.github.io/Old_MTL/",
    thumb: "assets/thumbnails/old_mtl.png",
    alt: "3D map of Old Montreal landmarks"
  },
  {
    title: "Mono River Basin Flood Risk Analysis",
    intro: "A watershed-scale flood risk assessment of the Mono River Basin using a rainfall and populatione exposure implemented fully in QGIS. The project visualizes monthly flood dynamics and composite risk zones through interactive QGIS-based web maps.",
    keywords: ["Flood modeling","Hydrology","Spatial analysis","QGIS","Leaflet","Remote sensing","JavaScript"],
    url: "https://sleepysunflower.github.io/mono_flood/",
    thumb: "assets/thumbnails/mono_flood.png",
    alt: "Flood risk web map for Mono River Basin"
  },
  {
    title: "Montreal Trees",
    intro: "An interactive web map visualizing Montreal’s urban forest dynamic. Users can explore living and felled trees, filter by planting years, and overlay livability metrics such as heat, noise, and air quality. I preprocessed and joined multiple open datasets using SQL and Python, and built custom modules for species cards, year filters, and a bilingual UI to enable detailed tree-level exploration that are unavailable on other sites.",
    keywords: ["Tree","Interactive webmap","PostgreSQL","Python","MapLibre GL JS","JavaScript"],
    url: "https://sleepysunflower.github.io/tree-mtl/",
    thumb: "assets/thumbnails/tree_mtl.png",
    alt: "Montreal urban forest map"
  },
  {
    title: "Traffic Collisions",
    intro: "An interactive web portal analyzing Montreal’s traffic collisions (2012–2021). It allows detailed spatial–temporal exploration of collision patterns, which integrates MapLibre GL for spatial visualization and DuckDB-WASM for in-browser data querying.   The Random Forest models, trained in Python, perform real-time predictions of collision occurrence and severity.",
    keywords: ["Transportation","Spatial analysis","Machine learning","Python","Vite+React","Javascript","TypeScript"],
    url: "https://sleepysunflower.github.io/traffic_collisions",
    thumb: "assets/thumbnails/traffic_collisions.png",
    alt: "Traffic collisions dashboard"
  }
];

function renderProjects(){
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';

  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project card';

    const thumbWrap = document.createElement('div');
    thumbWrap.className = 'thumb-wrap';

    const img = document.createElement('img');
    img.className = 'thumb';
    img.alt = p.alt || p.title;
    img.src = p.thumb;
    img.onerror = () => { img.onerror = null; img.src = createPlaceholder(); };
    thumbWrap.appendChild(img);

    const body = document.createElement('div');
    body.className = 'proj-body';

    const h3 = document.createElement('h3');
    h3.className = 'proj-title';
    h3.textContent = p.title;

    const intro = document.createElement('p');
    intro.className = 'proj-intro';
    intro.textContent = p.intro;

    const tags = document.createElement('div');
    tags.className = 'tags';
    p.keywords.forEach(k => {
      const t = document.createElement('span');
      t.className = 'tag';
      t.textContent = k;
      tags.appendChild(t);
    });

    const actions = document.createElement('div');
    actions.className = 'actions';
    const open = document.createElement('a');
    open.className = 'btn primary';
    open.href = p.url;
    open.target = '_blank';
    open.rel = 'noopener noreferrer';
    open.textContent = 'Open';
    actions.appendChild(open);

    body.append(h3, intro, tags);
    card.append(thumbWrap, body, actions);
    grid.appendChild(card);
  });
}

function createPlaceholder(){
  const svg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360">
      <rect width="640" height="360" fill="#e5f3e4"/>
      <rect x="24" y="24" width="592" height="312" rx="18" ry="18" fill="none" stroke="#556a54" stroke-opacity="0.28" stroke-width="3"/>
    </svg>
  `);
  return `data:image/svg+xml;charset=utf-8,${svg}`;
}

document.addEventListener('DOMContentLoaded', renderProjects);
