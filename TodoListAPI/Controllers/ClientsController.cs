using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoListAPI.Models;
using TodoListAPI.Services;

namespace TodoListAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public ClientsController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Client> GetClients()
        {
            return context.Clients.OrderByDescending(c => c.Id).ToList();
        }

        [HttpGet("{id}")]
        public IActionResult GetClient(int id)
        {
            var client = context.Clients.Find(id);
            if (client == null)
            {
                return NotFound();
            }

            return Ok(client);
        }

        [HttpPost]
        public IActionResult CreateClient(ClientDto clientDto)
        {
            try
            {
                var client = new Client
                {
                    Title = clientDto.Title,
                    Description = clientDto.Description ?? "",
                    CreatedAt = clientDto.GetCreatedAtDateTime()
                };

                context.Clients.Add(client);
                context.SaveChanges();
                return Ok(client);
            }
            catch (FormatException)
            {
                return BadRequest("Invalid date format. Please use dd/MM/yyyy.");
            }

        }

        [HttpPut("{id}")]
        public IActionResult EditClient(int id, ClientDto clientDto)
        {
            var client = context.Clients.Find(id);
            if (client == null)
            {
                return NotFound();
            }

            try
            {
                client.Title = clientDto.Title;
                client.Description = clientDto.Description ?? "";
                client.CreatedAt = clientDto.GetCreatedAtDateTime();
                context.SaveChanges();

                return Ok(client);
            }
            catch (FormatException)
            {
                return BadRequest("Invalid date format. Please use dd/MM/yyyy.");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteClient(int id)
        {
            var client = context.Clients.Find(id);
            if (client == null)
            {
                return NotFound();
            }

            context.Clients.Remove(client);
            context.SaveChanges();

            return Ok();
        }
        }
    }

