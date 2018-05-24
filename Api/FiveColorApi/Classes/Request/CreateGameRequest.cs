namespace FiveColorApi.Classes.Request
{
    public class CreateGameRequest
    {
        public int BaseHitpoints { get; set; }
        public string Format { get; set; }
        public string Name { get; set; }
        public int PlayerCount { get; set; }
        public int PlayerId { get; set; }
    }
}