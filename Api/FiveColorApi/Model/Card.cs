using Newtonsoft.Json;
using System.Collections.Generic;

namespace FiveColorApi.Model
{
    public class Card
    {
        [JsonProperty(PropertyName = "Effects")]
        public List<Effect> Effects { get; set; }
        [JsonProperty(PropertyName = "enabled")]
        public bool enabled { get; set; }
        [JsonProperty(PropertyName = "Id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "image")]
        public string image { get; set; }
        [JsonProperty(PropertyName = "tapped")]
        public bool tapped { get; set; }
        [JsonProperty(PropertyName = "Types")]
        public List<string> Types { get; set; }
        [JsonProperty(PropertyName = "ManaCost")]
        public List<string> ManaCost { get; set; }
        [JsonProperty(PropertyName = "ManaProduction")]
        public List<Mana> ManaProduction { get; set; }
        [JsonProperty(PropertyName = "ManaProduction")]
        public string Name { get; set; }
    }
}
