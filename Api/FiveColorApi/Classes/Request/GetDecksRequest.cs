using FiveColorApi.Classes.Enumerations;

namespace FiveColorApi.Classes.Request
{
    public class GetDecksRequest
    {
        public int PlayerId { get; set; }
        public bool MyDecksOnly { get; set; }
        public Format Format { get; set; }
    }
}