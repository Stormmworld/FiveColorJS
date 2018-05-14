using Newtonsoft.Json;

namespace FiveColorApi.Model
{
    public class Mana
    {
        [JsonProperty(PropertyName = "ManaType")]
        public string ManaType { get; set; }
        [JsonProperty(PropertyName = "Quantity")]
        public int Quantity { get; set; }
    }
}