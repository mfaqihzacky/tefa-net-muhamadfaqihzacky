using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace TodoListAPI.Models
{
    public class ClientDto
    {
        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; } = "";

        public string? Description { get; set; } = "";

        [Required(ErrorMessage = "Date is required")]
        public string CreatedAt { get; set; } = "";

        public DateTime GetCreatedAtDateTime()
        {
            return DateTime.ParseExact(CreatedAt, "dd/MM/yyyy", CultureInfo.InvariantCulture);
        }
    }
}
