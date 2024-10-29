using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductReadRepository _productReadRepository;
        private readonly IProductWriteRepository _productWriteRepository;

        public ProductsController(IProductReadRepository productReadRepository, IProductWriteRepository productWriteRepository)
        {
            _productReadRepository = productReadRepository;
            _productWriteRepository = productWriteRepository;
        }

        [HttpGet]
        public async Task Get()
        {
            //await _productWriteRepository.AddRangeAsync(new()
            //{
            //    new() { Id = 3, Name = "Product 1", Description = "Kalem", Price = 10, Stock = 5},
            //    new() { Id = 4, Name = "Product 2", Description = "Makas", Price = 15, Stock = 7}
            //});
            //await _productWriteRepository.SaveAsync();
            Product p = await _productReadRepository.GetByIdAsync(1, false);
            p.Name = "Product 1";
            await _productWriteRepository.SaveAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            Product p = await _productReadRepository.GetByIdAsync(id);
            return Ok(p);
        }
    }
}
