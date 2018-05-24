namespace FiveColorApi.Classes.Request
{
    public class PlayerReadyrequest
    {
        public string GameId { get; set; }
        public int PlayerId { get; set; }
        public bool Ready { get; set; }
    }
}