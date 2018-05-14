namespace FiveColorApi.Classes.Request
{
    public class CreatePlayerDetailRequest
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string VerifyPassword { get; set; }
    }
}