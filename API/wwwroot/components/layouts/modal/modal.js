function openModalAuth() {
  const modal = document.getElementById('modal_overlay');
  modal.classList.add('modal_showed');
modal.innerHTML =
  `
    <div class="modal_container">
      <div class="modal_benefits">
      </div>
    </div>
  `;
}

const modalOverlay = document.getElementById('modal_overlay');
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) modalOverlay.classList.add('modal_closed');
});

const modalLoginOpenBtn = document.getElementById('modal_login.btn');
modalLoginOpenBtn.addEventListener('click', () => {
  openModalAuth();
})