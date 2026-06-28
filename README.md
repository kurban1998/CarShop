# CarShop — Руководство по запуску

## 

## Шаг 1 — Склонируй репозиторий

Открой терминал и выполни:

```
git clone ССЫЛКА\_НА\_РЕПОЗИТОРИЙ
cd CarShop
```

\---

## Шаг 2 — Создай файл с настройками подключения к базе

В папке `API` создай файл `appsettings.Local.json` (рядом с `appsettings.json`):

```json
{
  "ConnectionStrings": {
    "Default": "Server=localhost;Database=CarShopDB;Integrated Security=True;TrustServerCertificate=True;"
  }
}
```

> Если твой SQL Server называется иначе (например `DESKTOP-TKQNJBJ\\MSSQLSERVERMY` или `localhost\\SQLEXPRESS`) — замени `localhost` на имя своего сервера.
> Имя сервера можно посмотреть в SQL Server Management Studio при входе.

\---

## Шаг 3 — Открой проект в Visual Studio

Открой файл `CarShop.sln` — Visual Studio запустится и загрузит все проекты.

\---

## Шаг 4 — Запусти проект

Нажми **F5** или зелёную кнопку ▶️ вверху.

При первом запуске автоматически:

* Создастся база данных `CarShopDb`
* Создадутся все таблицы
* Заполнятся тестовые данные

\---

## Шаг 5 — Открой сайт в браузере

```
https://localhost:7025/index.html
```

Должны появиться карточки автомобилей. Всё готово!

\---

## Где твои файлы

Ты работаешь **только** с этими файлами:

```
API/
└── wwwroot/
    ├── index.html   ← разметка страниц
    ├── app.js       ← логика и запросы к серверу
    └── style.css    ← стили
```

> В остальные папки и файлы лезть не нужно — это бэкенд.

\---

## Доступные API эндпоинты

Данные приходят в формате JSON. Можешь открыть прямо в браузере чтобы посмотреть:

|Метод|URL|Что возвращает|
|-|-|-|
|GET|`/api/cars`|список всех автомобилей|
|GET|`/api/cars/1`|один автомобиль по id|

### Пример ответа `/api/cars`:

```json
\[
  {
    "id": 1,
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 28000,
    "color": "Белый",
    "mileage": 15000,
    "imageUrl": "https://...",
    "description": "Отличное состояние"
  }
]
```

\---

## Как получить данные в JavaScript

```javascript
// Получить все машины
const response = await fetch('/api/cars');
const cars = await response.json();

// Получить одну машину по id
const response = await fetch('/api/cars/1');
const car = await response.json();
```

\---

## Частые проблемы

**Сайт не открывается**
— Убедись что проект запущен (зелёная кнопка ▶️ в Visual Studio)

**Ошибка подключения к базе**
— Проверь что SQL Server запущен и имя сервера правильное в `appsettings.Local.json`

**Карточки не появляются**
— Открой браузер → F12 → Console и посмотри ошибку, сообщи бэкендеру

\---

## Контакты

По вопросам бэкенда и базы данных обращайся к **\[ИМЯ БЭКЕНДЕРА]**.

