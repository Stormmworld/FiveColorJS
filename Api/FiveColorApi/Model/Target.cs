using Newtonsoft.Json;
using FiveColorApi.Classes.Enumerations;

namespace FiveColorApi.Model
{
    public class Target
    {
        [JsonProperty(PropertyName = "CardId")]
        public int CardId { get; set; }
        [JsonProperty(PropertyName = "CardLocation")]
        public Locations CardLocation { get; set; }
        [JsonProperty(PropertyName = "PlayerId")]
        public int PlayerId { get; set; }
    }
}