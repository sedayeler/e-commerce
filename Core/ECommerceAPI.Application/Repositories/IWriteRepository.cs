using ECommerceAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Application.Repositories
{
    public interface IWriteRepository<T> : IRepository<T> where T : BaseEntity
    {
        Task<bool> Add(T entity);
        Task<bool> Add(List<T> entities);
        Task<bool> UpdateAsync(T entity);
        Task<bool> Remove(T entity);
        Task<bool> Remove(int id);
    }
}
