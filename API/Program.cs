using Application.Interfaces;
using Infrastructure.Data;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.Local.json", optional: true);

builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("Default")));

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

builder.Services.AddCors(opt =>
    opt.AddDefaultPolicy(p =>
        p.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));

var app = builder.Build();

app.UseCors();
app.UseStaticFiles();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();

    if (!db.Cars.Any())
    {
        db.Cars.AddRange(SeedData.GetCars());
        db.SaveChanges();
    }
}

app.MapGet("/api/cars", async (IUnitOfWork uow) =>
{
    var cars = await uow.Cars.GetAllAsync();
    return Results.Ok(cars);
});

app.MapGet("/api/cars/{id}", async (int id, IUnitOfWork uow) =>
{
    var car = await uow.Cars.GetByIdAsync(id);
    return car is null ? Results.NotFound() : Results.Ok(car);
});

app.Run();
