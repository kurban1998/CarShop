namespace Application.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        public ICarRepository Cars { get; }

        public Task<int> SaveAsync();
    }
}
