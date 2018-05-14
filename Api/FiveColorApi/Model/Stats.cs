using Newtonsoft.Json;
namespace FiveColorApi.Model
{
    public class Stats
    {
        [JsonProperty(PropertyName = "DeckName")]
        public string DeckName { get; set; }
        [JsonProperty(PropertyName = "Id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "Life")]
        public int Life { get; set; }
        [JsonProperty(PropertyName = "Name")]
        public string Name { get; set; }
    }
}