document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const homeLink = document.getElementById('home');
  const catalogLink = document.getElementById('catalog');

  // Відображення головної сторінки
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    content.innerHTML = `<p>Welcome to the Catalog App. Select a category to see items.</p>`;
  });

  // Завантаження каталогу
  catalogLink.addEventListener('click', (e) => {
    e.preventDefault();
    loadCategories();
  });

  // Завантаження категорій
  async function loadCategories() {
    const response = await fetch('./data/categories.json');
    const categories = await response.json();
    content.innerHTML = '<h2>Catalog</h2><ul id="categories" class="mt-4"></ul>';
    const categoriesList = document.getElementById('categories');

    categories.forEach(category => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#" class="text-blue-500" data-category="${category.shortname}">${category.name}</a>`;
      categoriesList.appendChild(li);
    });

    // Додавання "Specials"
    const specials = document.createElement('li');
    specials.innerHTML = `<a href="#" id="specials" class="text-red-500">Specials</a>`;
    categoriesList.appendChild(specials);

    // Додавання подій для категорій
    document.querySelectorAll('[data-category]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        loadCategoryItems(e.target.dataset.category);
      });
    });

    // Подія для "Specials"
    specials.addEventListener('click', (e) => {
      e.preventDefault();
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      loadCategoryItems(randomCategory.shortname);
    });
  }

  // Завантаження товарів категорії
  async function loadCategoryItems(categoryShortname) {
    const response = await fetch(`./data/${categoryShortname}.json`);
    const items = await response.json();
    content.innerHTML = `<h2>${categoryShortname.toUpperCase()}</h2><div id="items" class="grid grid-cols-2 gap-4 mt-4"></div>`;
    const itemsContainer = document.getElementById('items');

    items.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('p-4', 'border', 'rounded', 'bg-white');
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="mb-2">
        <h3 class="text-lg font-bold">${item.name}</h3>
        <p>${item.description}</p>
        <p class="text-green-600 font-bold">${item.price}</p>
      `;
      itemsContainer.appendChild(div);
    });
  }
});
