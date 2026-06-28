using Application.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly AppDbContext _db;
        protected readonly DbSet<T> _set;

        public GenericRepository(AppDbContext db)
        {
            _db = db;
            _set = db.Set<T>();
        }

        public async Task<List<T>> GetAllAsync() =>
            await _set.ToListAsync();

        public async Task<T> GetByIdAsync(int id) =>
            await _set.FindAsync(id);

        public async Task AddAsync(T entity) =>
            await _set.AddAsync(entity);

        public async Task UpdateAsync(T entity) =>
            _set.Update(entity);

        public async Task DeleteAsync(int id)
        {
            var entity = await GetByIdAsync(id);
            if (entity != null)
                _set.Remove(entity);
        }
    }
}
