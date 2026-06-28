using Domain.Entities;

namespace Infrastructure.Data
{
    public static class SeedData
    {
        public static List<Car> GetCars() => new()
        {
            new Car
            {
                Brand = "Toyota",
                Model = "Camry",
                Year = 2022,
                Price = 28000,
                Color = "Белый",
                ImageUrl = "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600",
                Description = "Отличное состояние, один владелец"
            },
            new Car
            {
                Brand = "BMW",
                Model = "X5",
                Year = 2021,
                Price = 65000,
                Color = "Чёрный",
                ImageUrl = "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600",
                Description = "Полный привод, панорамная крыша"
            },
            new Car
            {
                Brand = "Mercedes",
                Model = "E-Class",
                Year = 2023,
                Price = 72000,
                Color = "Серебристый",
                ImageUrl = "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600",
                Description = "Почти новый, гарантия производителя"
            },
            new Car
            {
                Brand = "Audi",
                Model = "A6",
                Year = 2021,
                Price = 55000,
                Color = "Синий",
                ImageUrl = "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600",
                Description = "Кожаный салон, климат-контроль"
            },
            new Car
            {
                Brand = "Volkswagen",
                Model = "Passat",
                Year = 2020,
                Price = 22000,
                Color = "Красный",
                ImageUrl = "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600",
                Description = "Экономичный, хорошая история обслуживания"
            },
        };
    }
}
