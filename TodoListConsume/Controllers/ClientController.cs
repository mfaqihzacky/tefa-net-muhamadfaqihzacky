using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using TodoListConsume.Models;

namespace TodoListConsume.Controllers
{
    public class ClientController : Controller
    {
        private readonly HttpClient _client;

        public ClientController()
        {
            _client = new HttpClient();
            _client.BaseAddress = new Uri("https://localhost:4000/api/");
        }

        [HttpGet]
        public IActionResult Index()
        {
            List<ClientViewModel> clientList = new List<ClientViewModel>();
            try
            {
                HttpResponseMessage response = _client.GetAsync("Clients").Result;
                if (response.IsSuccessStatusCode)
                {
                    string data = response.Content.ReadAsStringAsync().Result;
                    clientList = JsonConvert.DeserializeObject<List<ClientViewModel>>(data);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Deserialization error: {ex.Message}");
            }

            return View(clientList);
        }
    }
}
