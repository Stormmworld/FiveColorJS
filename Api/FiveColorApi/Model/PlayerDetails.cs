using Newtonsoft.Json;

namespace FiveColorApi.Model
{
    public class PlayerDetails
    {
        [JsonProperty(PropertyName = "DisplayName")]
        public string DisplayName { get; set; }
        [JsonProperty(PropertyName = "FirstName")]
        public string FirstName { get; set; }
        [JsonProperty(PropertyName = "Id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "LastName")]
        public string LastName { get; set; }
        [JsonProperty(PropertyName = "SocketId")]
        public string SocketId { get; set; }
    }
}