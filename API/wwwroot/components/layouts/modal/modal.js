function openModalAuth() {
  const modal = document.getElementById('modal_overlay');
  modal.classList.remove('modal_closed');
  modal.classList.add('modal_showed');
  modal.innerHTML =
    `
    <div class="auth-modal">
      <div class="auth-card">
        <div class="auth-benefits">
          <div class="auth-benefits-content">
            <h2 class="auth-benefits-title">
              Добро пожаловать<br>
              в Auto<span>Market</span>
            </h2>

            <p class="auth-benefits-text">
              Покупайте и продавайте автомобили<br>
              быстро, удобно и безопасно.
            </p>
          </div>

          <div class="auth-benefits-list">
            <div class="auth-benefit-item">
              <div class="auth-benefit-icon">
                <span>♡</span>
              </div>
              <div>
                <h4>Безопасные сделки</h4>
                <p>Проверенные продавцы и авто</p>
              </div>
            </div>

            <div class="auth-benefit-item">
              <div class="auth-benefit-icon">
                <span>◇</span>
              </div>
              <div>
                <h4>Выгодные предложения</h4>
                <p>Тысячи актуальных объявлений</p>
              </div>
            </div>

            <div class="auth-benefit-item">
              <div class="auth-benefit-icon">
                <span>◷</span>
              </div>
              <div>
                <h4>Экономия времени</h4>
                <p>Удобный поиск и фильтры</p>
              </div>
            </div>
          </div>
        </div>

        <div class="auth-form-side">
          <div class="auth-logo">
            <span class="auth-logo-icon">🚘</span>
            <span>Auto<span>Market</span></span>
          </div>

          <div class="auth-form-header">
            <h2>Вход в аккаунт</h2>
            <p>Введите ваши данные для входа</p>
          </div>

          <form class="auth-form">
            <div class="auth-field">
              <label>Email или телефон</label>
              <div class="auth-input-wrap">
                <span class="auth-input-icon">♙</span>
                <input type="text" placeholder="Введите email или телефон">
              </div>
            </div>

            <div class="auth-field">
              <label>Пароль</label>
              <div class="auth-input-wrap">
                <span class="auth-input-icon">▣</span>
                <input type="password" placeholder="Введите пароль">
                <button class="auth-eye-btn" type="button">⊙</button>
              </div>
            </div>

            <a class="auth-forgot" href="#">Забыли пароль?</a>

            <button class="auth-submit" type="submit">Войти</button>

            <div class="auth-divider">
              <span></span>
              <p>или</p>
              <span></span>
            </div>

            <button class="auth-google" type="button">
              <span>G</span>
              Войти через Google
            </button>

            <p class="auth-register">
              Нет аккаунта?
              <a href="#">Зарегистрироваться</a>
            </p>
          </form>
        </div>
      </div>
      <p class="auth-footer">© 2024 AutoMarket. Все права защищены.</p>
    </div>
  `;
}

const modalOverlay = document.getElementById('modal_overlay');
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.add('modal_closed');
  }
});

const modalLoginOpenBtn = document.getElementById('login_btn');
modalLoginOpenBtn.addEventListener('click', () => {
  openModalAuth();
})