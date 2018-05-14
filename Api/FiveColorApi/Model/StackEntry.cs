using Newtonsoft.Json;

namespace FiveColorApi.Model
{
    public class StackEntry
    {
        [JsonProperty(PropertyName = "Card")]
        public Card Card { get; set; }
        [JsonProperty(PropertyName = "Library")]
        public Target Target { get; set; }
    }
}