using Newtonsoft.Json;

namespace FiveColorApi.Model
{
    public class ChatMessage
    {
        [JsonProperty(PropertyName = "Message")]
        public string Message { get; set; }
        [JsonProperty(PropertyName = "PlayerName")]
        public string PlayerName { get; set; }
        [JsonProperty(PropertyName = "Timestamp")]
        public string Timestamp { get; set; }
        [JsonProperty(PropertyName = "CreateDate")]
        public System.DateTime CreateDate { get; set; }
    }
}