async function loadCars() {
    try {
        const response = await fetch('/api/cars');
        const cars = await response.json();

        const container = document.getElementById('cars-container');

        cars.forEach(car => {
            container.innerHTML += `
                <div class="card">
                    <img src="${car.imageUrl || ''}" alt="${car.brand} ${car.model}">
                    <div class="card-body">
                        <h2>${car.brand} ${car.model}</h2>
                        <div class="badges">
                            <span class="badge">${car.year} г.</span>
                            <span class="badge">${car.color || ''}</span>
                        </div>
                        <p class="description">${car.description || ''}</p>
                        <div class="footer">
                            <span class="price">$${car.price ? car.price.toLocaleString() : '0'}</span>
                            <button>Подробнее</button>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (err) {
        console.error('Ошибка загрузки:', err);
    }
}

loadCars();