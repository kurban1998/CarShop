const footerRoot = document.querySelector('#footer');

footerRoot.innerHTML = `
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__logo">
                <img src="/API/wwwroot/assets/images/logo/logo.png" alt="Logo" class="footer__logo-image">
                <div class="footer__logo-description">
                    <p> Автомобиль на любой вкус. </p> 
                    <p> Покупайте и продайте легко </p> 
                    <p> на AutoMarket</p>
                </div>
            </div>

            <div class="footer__contacts">
                <p class="footer__contacts-title">Контакты</p>
                <ul class="footer__contacts-list">
                    <li class="footer__contact-item">
                        <img src="/API/wwwroot/assets/images/icon/location.png" alt="location" class="footer__contact-icon">
                        г. Астана</li>
                    <li class="footer__contact-item"> 
                        <img src="/API/wwwroot/assets/images/icon/phone-call.png" alt="phone" class="footer__contact-icon">
                        +7 (777) 123-45-67</li>
                    <li class="footer__contact-item">
                        <img src="/API/wwwroot/assets/images/icon/email.png" alt="email" class="footer__contact-icon">
                        info@automarket.kz</li>
                </ul>
            </div>
        </div>    

            <div class="footer__bottom">
                <p class="footer__copy">&copy; 2024 AutoMarket. Все права защищены.</p>
            </div>

    </footer>
`;