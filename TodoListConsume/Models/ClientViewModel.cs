using System.ComponentModel;

namespace TodoListConsume.Models
{
    public class ClientViewModel
    {
        public int Id { get; set; }
        [DisplayName("Title")]
        public string Title { get; set; } = "";
        [DisplayName("Description")]
        public string Description { get; set; } = "";
        [DisplayName("Date")]
        public DateTime CreatedAt { get; set; }
    }
}
