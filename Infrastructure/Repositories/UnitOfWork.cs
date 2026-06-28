using Application.Interfaces;
using Infrastructure.Data;

namespace Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        public ICarRepository Cars { get; }

        public UnitOfWork(AppDbContext db)
        {
            _db = db;
            Cars = new CarRepository(db);
        }

        public async Task<int> SaveAsync() =>
            await _db.SaveChangesAsync();

        public void Dispose() =>
            _db.Dispose();

        private readonly AppDbContext _db;
    }
}
