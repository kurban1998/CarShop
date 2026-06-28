const headerRoot = document.querySelector('#header');

headerRoot.innerHTML = `
  <div class="header">
    <div class="header_container">
      <div class="header-wrapper">
        <div class="logo_container">
          <svg class="logo_icon icon icon-car" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M3 13L4.6 8.8C5 7.7 6.1 7 7.3 7H16.7C17.9 7 19 7.7 19.4 8.8L21 13"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5 13H19C20.1 13 21 13.9 21 15V18H18.5" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.5 18H3V15C3 13.9 3.9 13 5 13" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="7.5" cy="18" r="2" stroke="currentColor" stroke-width="2" />
            <circle cx="16.5" cy="18" r="2" stroke="currentColor" stroke-width="2" />
            <path d="M7 10H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <h2 class="logo_title">AutoMarket</h2>
        </div>
        <nav class="nav">
          <ul class="nav_ul">
            <li class="nav_li">Главная</li>
            <li class="nav_li">Каталог</li>
            <li class="nav_li">Добавить авто</li>
            <li class="nav_li">О нас</li>
            <li class="nav_li">Контакты</li>
          </ul>
        </nav>

        <div class="profile">
          <div class="favorites">
            <button class="favorite-btn"><svg class="icon icon-heart-active" width="26" height="26"
              viewBox="0 0 24 24">
              <path
                d="M20.8 4.6C18.9 2.8 15.9 2.8 14.1 4.7L12 6.8L9.9 4.7C8.1 2.8 5.1 2.8 3.2 4.6C1.3 6.5 1.3 9.6 3.2 11.5L12 20.3L20.8 11.5C22.7 9.6 22.7 6.5 20.8 4.6Z" />
            </svg></button>

          </div>
          <div class="action">
            <svg class="action_icon icon icon-plus-circle" width="26" height="26" viewBox="0 0 24 24"
              fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
              <path d="M12 8V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <svg class="profile_icon icon icon-user" width="26" height="26" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2" />
            <path d="M4 20C4.8 16.5 7.8 14 12 14C16.2 14 19.2 16.5 20 20" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" />
          </svg>
          <span class="profile_span">Профиль</span>
          <svg class="profile_arrow icon icon-chevron-down" width="18" height="18" viewBox="0 0 24 24"
            fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <btn class="nav_btn">Добавить объявления +</btn>
        </div>
      </div>
    </div>
  </div>
`;