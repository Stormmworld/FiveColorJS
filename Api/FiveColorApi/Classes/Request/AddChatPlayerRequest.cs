namespace FiveColorApi.Classes.Request
{
    public class AddChatPlayerRequest
    {
        public string DisplayName { get; set; }
        public string FirstName { get; set; }
        public int Id { get; set; }
        public string LastName { get; set; }
        public string SocketId { get; set; }
    }
}