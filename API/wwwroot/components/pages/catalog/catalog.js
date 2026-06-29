import { getCars } from "../../../services/car-service/car-service.js";
const catalog = document.getElementById('catalog');
catalog.innerHTML =
  `
    <div class="catalog">
      <div class="catalog_container">
        <div class="filter">
          <div class="filter_header_container">
            <h3 class="filter_header">Фильтры</h3>
            <button class="filter_clear_btn icon">Очистить все</button>
          </div>
          <div class="filter_form brand">
            <form class="filter_form" action="">
              <label for="">Марка</label>
              <div class="filter_input_container">
                <input class="filter_input" type="text">
                <svg class="filter_arrow icon icon-chevron-down" width="18" height="18" viewBox="0 0 24 24"
                  fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
            </form>
          </div>
          <div class="filter_form model">
            <form action="">
              <label for="">Модель</label>
              <div class="filter_input_container">
                <input class="filter_input" type="text">
                <svg class="filter_arrow icon icon-chevron-down" width="18" height="18" viewBox="0 0 24 24"
                  fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
            </form>
          </div>
          <div class="filter_form price">
            <form action="">
              <label for="">Цена</label>
              <div class="filter_input_container">
                <input class="filter_input_price" type="text" placeholder="от:">
                <input class="filter_input_price" type="text" placeholder="до:">
                <svg class="profilfilter_arrow icon icon-chevron-down" width="18" height="18" viewBox="0 0 24 24"
                  fill="none">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
            </form>
          </div>
          <button class="filter_btn red_btn">Показать 3 Авто</button>
        </div>
        <div class="catalog_wrapper">
          <div id="catalog_cards" class="catalog_cards">
            <template id="catalog_template">
              <div class="card">
                <img class="card_img" src="" alt="">
                <div class="card_text">
                  <div class="card_year_group">
                    <div class="card_name">
                      <h3 class="card_brand"></h3>
                      <h3 class="card_model"></h3>
                    </div>
                    <p class="card_year"></p>
                  </div>
                  <p class="card_price"></p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  `;

const template = document.getElementById('catalog_template');
const catalogCards = document.getElementById('catalog_cards');

const tempCars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 35000,
    imageUrl: 'https://placehold.co/400x250',
  },
  {
    brand: 'BMW',
    model: 'X5',
    year: 2021,
    price: 40000,
    imageUrl: 'https://placehold.co/400x250',
  },
  {
    brand: 'Audi',
    model: 'A6',
    year: 2019,
    price: 32000,
    imageUrl: 'https://placehold.co/400x250',
  },
];

renderCars(tempCars);

const cars = await getCars();

function renderCars(cars) {
  catalogCards.innerHTML = '';
  cars.forEach(car => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.card_img').src = car.imageUrl;
    clone.querySelector('.card_brand').textContent = car.brand;
    clone.querySelector('.card_model').textContent = car.model;
    clone.querySelector('.card_year').textContent = car.year;
    clone.querySelector('.card_price').textContent = car.price + ' tg';
    catalogCards.appendChild(clone)
  })
}
renderCars(cars);